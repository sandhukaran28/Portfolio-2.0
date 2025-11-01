import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I’m <span className="purple">Karan Sandhu</span> from{" "}
            <span className="purple">Brisbane, Australia</span>.
            <br />
            <br />
            I’m a <b className="purple">Full-Stack Engineer</b> with around{" "}
            <b className="purple">3 years of experience</b> building and
            optimizing <b className="purple">scalable, production-grade web and mobile applications</b>.
            <br />
            <br />
            My primary stack includes{" "}
            <b className="purple">
              React, Next.js, TypeScript, Node.js, and AWS
            </b>
            , with additional experience in <b className="purple">Vue, Angular, and React Native</b>.
            I focus on crafting <b className="purple">performant, accessible, and maintainable UIs</b> that
            directly improve product outcomes.
            <br />
            <br />
            Recently, I completed my{" "}
            <b className="purple">Master of Information Technology</b> at{" "}
            Queensland University of Technology, where I deepened my skills in
            cloud computing, software architecture, and AI integration.
            <br />
            <br />
            Outside of work, I’m curious about new ideas and enjoy:
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
            “Code with purpose, design with empathy.”
          </p>
          <footer className="blockquote-footer">Karan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
