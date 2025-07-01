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
            <br />I have over 2 years of professional experience in frontend
            development, working with technologies like
            <b className="purple">
              {" "}
              React.js, Next.js, TypeScript, and Tailwind CSS
            </b>
            .
            <br />
            <br />
            I'm passionate about building clean, user-friendly web interfaces
            and contributing to impactful projects.
            <br />
            <br />
            Outside of coding, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing strategy and adventure games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new places and cultures
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with purpose, design with empathy."{" "}
          </p>
          <footer className="blockquote-footer">Karan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
