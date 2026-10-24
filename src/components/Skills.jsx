import { useEffect, useState } from "react";
import { FaAws } from "react-icons/fa";
import {
  SiAngular,
  SiAnthropic,
  SiDocker,
  SiFigma,
  SiGit,
  SiGithubcopilot,
  SiGraphql,
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
} from "react-icons/si";
import { Reveal, TiltCard } from "./motion";
import { interests, principles, profile } from "../data";

const marquee = [
  [SiReact, "React"],
  [SiVuedotjs, "Vue 3"],
  [SiTypescript, "TypeScript"],
  [SiNextdotjs, "Next.js"],
  [SiNestjs, "NestJS"],
  [SiNodedotjs, "Node.js"],
  [SiGraphql, "GraphQL"],
  [FaAws, "AWS"],
  [SiAnthropic, "Claude API"],
  [SiAngular, "Angular"],
  [SiRedux, "Redux"],
  [SiTailwindcss, "Tailwind"],
  [SiPostgresql, "PostgreSQL"],
  [SiMongodb, "MongoDB"],
  [SiSupabase, "Supabase"],
  [SiThreedotjs, "Three.js"],
  [SiStripe, "Stripe"],
  [SiDocker, "Docker"],
  [SiPython, "Python"],
  [SiJavascript, "JavaScript"],
  [SiGit, "Git"],
  [SiFigma, "Figma"],
  [SiVercel, "Vercel"],
  [SiGithubcopilot, "Copilot"],
];

function LocalTime() {
  const format = () =>
    new Intl.DateTimeFormat("en-AU", {
      timeZone: profile.timeZone,
      hour: "numeric",
      minute: "2-digit",
    }).format(new Date());
  const [time, setTime] = useState(format);

  useEffect(() => {
    const id = setInterval(() => setTime(format()), 15000);
    return () => clearInterval(id);
  }, []);

  return <span className="local-time">{time}</span>;
}

function Chips({ items }) {
  return (
    <ul className="chips">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="wrap">
        <Reveal as="p" className="eyebrow">
          Toolkit
        </Reveal>
        <Reveal as="h2" className="section-title" delay={0.05}>
          What I work with.
          <br />
          <span className="muted">Front to back, day to day.</span>
        </Reveal>

        <div className="bento">
          <Reveal className="bento-cell span-2">
            <TiltCard className="card bento-card bento-ai" max={3}>
              <SiAnthropic className="bento-icon" aria-hidden="true" />
              <h3>AI in production</h3>
              <p>
                I’ve shipped real AI features with the Claude and OpenAI APIs: a pipeline that’s
                processed 50,000+ documents, invoice scanning, and personal health insights. I
                also use Claude Code and Copilot every day, and they’ve honestly changed how I
                work.
              </p>
              <Chips items={["Claude API", "OpenAI", "AI agents", "MCP", "LLM pipelines"]} />
            </TiltCard>
          </Reveal>

          <Reveal className="bento-cell" delay={0.08}>
            <TiltCard className="card bento-card bento-place" max={3}>
              <p className="bento-label">My time right now</p>
              <LocalTime />
              <p>I’m on Australia’s east coast, and happy to work with teams anywhere.</p>
            </TiltCard>
          </Reveal>

          <Reveal className="bento-cell" delay={0.04}>
            <TiltCard className="card bento-card" max={3}>
              <h3>Web &amp; mobile</h3>
              <Chips items={["React", "Next.js", "React Native", "TypeScript", "Angular", "Redux", "Three.js"]} />
            </TiltCard>
          </Reveal>

          <Reveal className="bento-cell" delay={0.1}>
            <TiltCard className="card bento-card" max={3}>
              <h3>Backend &amp; cloud</h3>
              <Chips items={["NestJS", "Node.js", "GraphQL", "AWS Lambda", "S3", "Supabase", "PostgreSQL", "MongoDB"]} />
            </TiltCard>
          </Reveal>

          <Reveal className="bento-cell" delay={0.16}>
            <TiltCard className="card bento-card" max={3}>
              <h3>Off the clock</h3>
              <ul className="interests">
                {interests.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </TiltCard>
          </Reveal>

          <Reveal className="bento-cell span-3" delay={0.08}>
            <div className="card bento-card principles">
              <p className="bento-label">How I work</p>
              <ul className="principles-list">
                {principles.map((p) => (
                  <li key={p.title}>
                    <h3>{p.title}</h3>
                    <p>{p.proof}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="marquee" aria-label="Technologies I work with">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <ul key={copy} className="marquee-group" aria-hidden={copy === 1}>
              {marquee.map(([Icon, label]) => (
                <li key={label}>
                  <Icon aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
