import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiGraphql,
  SiAwsamplify,
  SiDocker,
  SiPostgresql,
} from "react-icons/si";

function Techstack() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "50px",
      }}
      aria-label="Technology stack icons"
    >
      {/* Frontend */}
      <Col xs={4} md={2} className="tech-icons" aria-label="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" aria-label="TypeScript">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons" aria-label="React">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" aria-label="Next.js">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" aria-label="Tailwind CSS">
        <SiTailwindcss />
      </Col>

      {/* Backend */}
      <Col xs={4} md={2} className="tech-icons" aria-label="Node.js">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" aria-label="GraphQL">
        <SiGraphql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" aria-label="MongoDB">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" aria-label="PostgreSQL">
        <SiPostgresql />
      </Col>

      {/* Cloud & Tools */}
      <Col xs={4} md={2} className="tech-icons" aria-label="AWS">
        <SiAwsamplify />
      </Col>
      <Col xs={4} md={2} className="tech-icons" aria-label="Docker">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons" aria-label="Git">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;
