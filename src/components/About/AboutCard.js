import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
       <p style={{ textAlign: "justify" }}>
  Hi, I’m <span className="purple">Karan Sandhu</span>, a Brisbane-based{" "}
  <b className="purple">Full-Stack Engineer</b> with{" "}
  <b className="purple">2+ years of experience</b> building and optimizing{" "}
  <b className="purple">scalable, production-grade web applications</b>.
  <br />
  <br />
  My primary stack includes{" "}
  <b className="purple">
    React, Next.js, TypeScript, Node.js, and AWS
  </b>
  , with additional experience in{" "}
  <b className="purple">Vue, Angular, and React Native</b>. I focus on crafting{" "}
  <b className="purple">performant, accessible, and maintainable user interfaces</b>{" "}
  that improve real product outcomes.
  <br />
  <br />
  I recently completed my{" "}
  <b className="purple">Master of Information Technology</b> at{" "}
  <b className="purple">Queensland University of Technology (QUT)</b>, where I
  strengthened my foundation in cloud computing, software architecture, and
  applied AI.
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
            “I care about building software that’s reliable, usable, and easy to maintain.”
          </p>
          <footer className="blockquote-footer">Karan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
