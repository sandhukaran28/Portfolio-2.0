import { MotionConfig } from "framer-motion";
import { useSmoothScroll } from "./lib/smoothScroll";
import ScrollProgress from "./components/ScrollProgress";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  useSmoothScroll();

  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <Nav />
      <main id="top">
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Contact />
      </main>
    </MotionConfig>
  );
}
