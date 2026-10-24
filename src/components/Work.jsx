import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FiActivity,
  FiArrowUpRight,
  FiDroplet,
  FiGithub,
  FiLink,
  FiPlay,
  FiShield,
} from "react-icons/fi";
import { Reveal } from "./motion";
import { projects } from "../data";

const icons = {
  play: FiPlay,
  shield: FiShield,
  droplet: FiDroplet,
  activity: FiActivity,
  link: FiLink,
};

function ProjectLinks({ demo, github }) {
  return (
    <div className="project-links">
      {demo && (
        <a href={demo} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">
          Visit site <FiArrowUpRight aria-hidden="true" />
        </a>
      )}
      {github && (
        <a href={github} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">
          <FiGithub aria-hidden="true" /> Source
        </a>
      )}
    </div>
  );
}

// Each card pins to the viewport and shrinks back slightly as the next one slides over it.
function StackedProject({ project, index, total, progress }) {
  const Icon = icons[project.icon];
  const targetScale = 1 - (total - index) * 0.04;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="stack-item">
      <motion.article
        className="project"
        style={{ scale, top: `calc(${index} * 28px)` }}
      >
        <div className="project-body">
          <p className="project-kicker">
            <span className="project-index">0{index + 1}</span>
            {project.kicker}
          </p>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-desc">{project.description}</p>
          <ul className="project-highlights">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <ul className="tags" aria-label="Tech stack">
            {project.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <ProjectLinks demo={project.demo} github={project.github} />
        </div>

        <div className="project-visual" style={{ background: project.gradient }} aria-hidden="true">
          <div className="visual-glow" />
          <div className="visual-window">
            <div className="window-bar">
              <span />
              <span />
              <span />
            </div>
            <div className="window-icon">
              <Icon />
            </div>
            <ol className="window-flow">
              {project.flow.map((step, i) => (
                <li key={step} style={{ animationDelay: `${i * 0.6}s` }}>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function Work() {
  const stackRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: stackRef, offset: ["start start", "end end"] });

  return (
    <section id="work" className="section work">
      <div className="wrap">
        <Reveal as="p" className="eyebrow">
          Selected work
        </Reveal>
        <Reveal as="h2" className="section-title" delay={0.05}>
          Things I’ve built.
          <br />
          <span className="muted">A few I’m proud of.</span>
        </Reveal>
      </div>

      <div ref={stackRef} className="stack wrap">
        {projects.map((p, i) => (
          <StackedProject
            key={p.title}
            project={p}
            index={i}
            total={projects.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
