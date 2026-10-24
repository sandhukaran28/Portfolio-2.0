import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";
import { EASE, prefersReducedMotion } from "../lib/smoothScroll";
import GlowOrb from "./GlowOrb";
import { profile } from "../data";

function SplitName({ text, delay = 0 }) {
  let index = 0;
  return (
    <span className="split" aria-label={text}>
      {text.split(" ").map((word, w) => (
        // Words never break internally, so punctuation stays on its word.
        <span className="split-word" aria-hidden="true" key={w}>
          {word.split("").map((ch) => {
            const i = index++;
            return (
              <span className="split-mask" key={i}>
                <motion.span
                  className="split-char"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1.1, delay: delay + i * 0.035, ease: EASE }}
                >
                  {ch}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const [active, setActive] = useState(true);
  const [ready, setReady] = useState(false);
  const [still] = useState(prefersReducedMotion);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  // Pause rendering while the hero is off-screen.
  useEffect(() => {
    const io = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting));
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const fade = (delay) => ({
    initial: { opacity: 0, y: 20, filter: "blur(6px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 1, delay, ease: EASE },
  });

  return (
    <section ref={ref} className="hero" aria-labelledby="hero-title">
      <div className={`hero-scene ${ready ? "is-ready" : ""}`} aria-hidden="true">
        <GlowOrb
          active={active}
          still={still}
          progress={scrollYProgress}
          onReady={() => setReady(true)}
        />
      </div>

      <motion.div className="hero-content wrap" style={{ y: contentY, opacity: contentOpacity }}>
        <motion.p className="pill" {...fade(0.1)}>
          <span className="pulse-dot" aria-hidden="true" />
          <span>
            {profile.role} at {profile.company}
            <span className="pill-extra"> · {profile.location}</span>
          </span>
        </motion.p>

        <h1 id="hero-title" className="hero-title">
          <SplitName text="Karan Sandhu." delay={0.2} />
        </h1>

        <motion.p className="hero-sub" {...fade(0.75)}>
          Full-stack engineer across <span className="text-gradient">web, mobile and AI.</span>{" "}
          I’ve built checkout for a booking platform, an AI pipeline that’s processed 50,000+
          documents, and a flood alert system for a state government.
        </motion.p>

        <motion.div className="hero-actions" {...fade(0.95)}>
          <a href="#work" className="btn btn-dark">
            See my work
          </a>
          <a href="#contact" className="btn btn-link">
            Get in touch <FiArrowRight aria-hidden="true" />
          </a>
        </motion.div>
      </motion.div>

      <motion.div className="scroll-cue" style={{ opacity: contentOpacity }}>
        <motion.a
          href="#about"
          aria-label="Scroll to about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
        >
          <FiArrowDown />
        </motion.a>
      </motion.div>
    </section>
  );
}
