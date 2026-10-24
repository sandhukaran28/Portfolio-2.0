import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
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
  const [open, setOpen] = useState(false);

  // Tuck the bar away while reading down, bring it back on any upward scroll.
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 480 && !open);
    setScrolled(y > 12);
  });

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <motion.header
      className={`nav ${scrolled || open ? "is-scrolled" : ""}`}
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: hidden ? -64 : 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      <nav className="nav-inner wrap" aria-label="Primary">
        <a href="#top" className="nav-mark" onClick={() => setOpen(false)}>
          Karan Sandhu
        </a>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn btn-primary btn-sm" onClick={() => setOpen(false)}>
          Let’s talk
        </a>
        <button
          type="button"
          className={`nav-toggle ${open ? "is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            id="mobile-menu"
            className="mobile-menu wrap"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            {links.map((l, i) => (
              <motion.li
                key={l.href}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04 * i, duration: 0.3, ease: EASE }}
              >
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
