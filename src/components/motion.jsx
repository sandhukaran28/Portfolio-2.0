import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { EASE } from "../lib/smoothScroll";

// Fades, lifts and un-blurs its children the first time they enter the viewport.
export function Reveal({ children, as = "div", delay = 0, y = 28, className, ...rest }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 1, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// Apple-style paragraph whose words light up one by one as it scrolls through.
export function ScrollText({ text, className }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.5"],
  });

  let accent = false;
  const words = text.split(" ").map((raw) => {
    const opens = raw.startsWith("*");
    const closes = raw.endsWith("*");
    if (opens) accent = true;
    const word = { text: raw.replace(/\*/g, ""), accent };
    if (closes) accent = false;
    return word;
  });

  return (
    <p ref={ref} className={className} aria-label={text.replace(/\*/g, "")}>
      {words.map((word, i) => (
        <Word
          key={i}
          word={word}
          progress={scrollYProgress}
          range={[i / words.length, (i + 1) / words.length]}
        />
      ))}
    </p>
  );
}

function Word({ word, progress, range }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <span aria-hidden="true" className="scroll-word">
      <motion.span style={{ opacity }} className={word.accent ? "text-gradient" : undefined}>
        {word.text}
      </motion.span>{" "}
    </span>
  );
}

// Counts up from zero when scrolled into view.
export function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const value = useMotionValue(0);
  const display = useTransform(value, (v) => Math.round(v).toLocaleString("en-US"));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, to, { duration: 2.2, ease: EASE });
    return () => controls.stop();
  }, [inView, to, value]);

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

// Gently pulls its child toward the cursor while hovered.
export function Magnetic({ children, strength = 0.3 }) {
  const ref = useRef(null);
  const spring = { stiffness: 180, damping: 14, mass: 0.2 };
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="magnetic"
      style={{ x, y }}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      {children}
    </motion.div>
  );
}

// Card with a cursor-following spotlight and a subtle 3D tilt.
export function TiltCard({ children, className = "", as = "div", max = 6, ...rest }) {
  const ref = useRef(null);
  const spring = { stiffness: 200, damping: 20 };
  const rotateX = useSpring(0, spring);
  const rotateY = useSpring(0, spring);
  const Tag = motion[as];

  const onMove = (e) => {
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
    rotateY.set((px - 0.5) * max);
    rotateX.set((0.5 - py) * max);
  };
  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <Tag
      ref={ref}
      className={`tilt-card ${className}`}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={onMove}
      onMouseLeave={reset}
      {...rest}
    >
      {children}
    </Tag>
  );
}
