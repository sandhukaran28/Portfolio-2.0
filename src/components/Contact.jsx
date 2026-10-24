import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowUp,
  FiArrowUpRight,
  FiCheck,
  FiCopy,
  FiFileText,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import { Magnetic, Reveal } from "./motion";
import { profile } from "../data";

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const field = document.createElement("textarea");
    field.value = text;
    document.body.appendChild(field);
    field.select();
    const ok = document.execCommand("copy");
    field.remove();
    return ok;
  }
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const timer = useRef();

  const onCopy = async () => {
    if (!(await copyText(profile.email))) return;
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="contact">
      <div className="aurora" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="wrap contact-inner">
        <Reveal as="p" className="pill pill-dark">
          <span className="pulse-dot" aria-hidden="true" />
          Always happy to chat
        </Reveal>

        <Reveal as="h2" className="contact-title" delay={0.05}>
          Got a role or a project in mind?
          <br />
          <span className="text-gradient">Let’s talk.</span>
        </Reveal>

        <Reveal as="p" className="contact-sub" delay={0.12}>
          Send me a message and tell me what you’re working on. I’d love to hear about it.
        </Reveal>

        <Reveal className="contact-actions" delay={0.2}>
          <Magnetic>
            <a href={`mailto:${profile.email}`} className="btn btn-primary btn-lg">
              Say hello <FiArrowUpRight aria-hidden="true" />
            </a>
          </Magnetic>

          <button type="button" className="copy-email" onClick={onCopy}>
            <span>{profile.email}</span>
            <span className="copy-icon" aria-hidden="true">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={copied ? "done" : "copy"}
                  initial={{ scale: 0.4, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.4, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  {copied ? <FiCheck /> : <FiCopy />}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="sr-only" aria-live="polite">
              {copied ? "Email copied to clipboard" : "Copy email address"}
            </span>
          </button>
        </Reveal>

        <Reveal className="contact-social" delay={0.28}>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <FiLinkedin aria-hidden="true" /> LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <FiGithub aria-hidden="true" /> GitHub
          </a>
          <a href="/Resume.pdf" target="_blank" rel="noreferrer">
            <FiFileText aria-hidden="true" /> Résumé
          </a>
        </Reveal>
      </div>

      <footer className="footer wrap">
        <p>
          © {new Date().getFullYear()} {profile.name}. Designed and built by me in Queensland.
        </p>
        <a href="#top" className="back-top">
          Back to top <FiArrowUp aria-hidden="true" />
        </a>
      </footer>
    </section>
  );
}
