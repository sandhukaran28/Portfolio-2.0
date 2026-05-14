import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Karan Sandhu</span>, a
            Brisbane-based <b className="purple">Full-Stack Engineer</b> with{" "}
            <b className="purple">3+ years of experience</b> building{" "}
            <b className="purple">
              AI-powered, production-grade web applications
            </b>
            .
            <br />
            <br />I currently build AI agents and automation pipelines at{" "}
            <b className="purple">ESGAgent</b>, where I designed a system using
            the <b className="purple">Claude API</b> that processes{" "}
            <b className="purple">50,000+ documents</b> and reduces months of
            manual work to 2-3 hours. My core stack is{" "}
            <b className="purple">React, Vue 3, TypeScript, Node.js, and AWS</b>
            , with experience across{" "}
            <b className="purple">
              Angular, Next.js, React Native, and GraphQL
            </b>
            .
            <br />
            <br />I use <b className="purple">
              Claude Code and GitHub Copilot
            </b>{" "}
            as a genuine part of how I build — not just for autocomplete but for
            thinking through problems faster.
            <br />
            <br />
            Outside of work, I enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing strategy and adventure games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new places and cultures
            </li>
            <li className="about-activity">
              <ImPointRight /> Experimenting with creative tech and AI tools
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I build systems that work at scale and keep getting better."
          </p>
          <footer className="blockquote-footer">Karan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
