import { useEffect } from "react";
import Lenis from "lenis";

export const EASE = [0.16, 1, 0.3, 1];

let lenis = null;

export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function scrollToHash(hash) {
  const target = hash === "#top" ? 0 : document.querySelector(hash);
  if (target === null) return;
  if (lenis) {
    lenis.scrollTo(target, { offset: hash === "#top" ? 0 : -40, duration: 1.4 });
  } else if (target === 0) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

// Inertial smooth scrolling (Lenis) plus smooth in-page anchor links.
export function useSmoothScroll() {
  useEffect(() => {
    let stop = null;
    if (!prefersReducedMotion()) {
      lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
      let frame;
      const raf = (time) => {
        lenis.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);

      stop = () => {
        cancelAnimationFrame(frame);
        lenis.destroy();
        lenis = null;
      };
    }

    const onClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const hash = link.getAttribute("href");
      if (hash.length < 2) return;
      e.preventDefault();
      scrollToHash(hash);
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      if (stop) stop();
    };
  }, []);
}
