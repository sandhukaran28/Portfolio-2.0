import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { EASE } from "../lib/smoothScroll";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Tuck the bar away while reading down, bring it back on any upward scroll.
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 480);
    setScrolled(y > 12);
  });

  return (
    <motion.header
      className={`nav ${scrolled ? "is-scrolled" : ""}`}
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: hidden ? -64 : 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      <nav className="nav-inner wrap" aria-label="Primary">
        <a href="#top" className="nav-mark">
          Karan Sandhu
        </a>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn btn-primary btn-sm">
          Let’s talk
        </a>
      </nav>
    </motion.header>
  );
}
