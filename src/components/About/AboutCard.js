import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
  <blockquote className="blockquote mb-0">
    <p style={{ textAlign: "justify" }}>
      Hi, I'm <span className="purple">Karan Sandhu</span> from{" "}
      <span className="purple">Brisbane, Australia</span>.
      <br />
      I'm currently pursuing my Master's in Information Technology at
      Queensland University of Technology, graduating in December 2025.
      <br />
      <br />
      I have 2.5+ years of professional experience building{" "}
      <b className="purple">scalable, user-focused web and mobile applications</b> —
      working across the stack with technologies like{" "}
      <b className="purple">
        React.js, Next.js, TypeScript, Node.js, and Tailwind CSS
      </b>.
      <br />
      <br />
      I’m passionate about crafting intuitive UIs, writing clean and maintainable
      code, and delivering features that make a measurable impact for users.
      <br />
      <br />
      Outside of coding, I love:
    </p>
    <ul>
      <li className="about-activity">
        <ImPointRight /> Playing strategy & adventure games
      </li>
      <li className="about-activity">
        <ImPointRight /> Exploring new places and cultures
      </li>
      <li className="about-activity">
        <ImPointRight /> Experimenting with creative tech & AI tools
      </li>
    </ul>

    <p style={{ color: "rgb(155 126 172)" }}>
      "Code with purpose, design with empathy."
    </p>
    <footer className="blockquote-footer">Karan</footer>
  </blockquote>
</Card.Body>

    </Card>
  );
}

export default AboutCard;
