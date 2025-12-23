import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiGithub,
  SiFigma,
  SiNotion,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row
      style={{ justifyContent: "center", paddingBottom: "50px" }}
      aria-label="Developer tools and platforms"
    >
      {/* Development */}
      <Col xs={4} md={2} className="tech-icons" aria-label="Visual Studio Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" aria-label="Postman">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" aria-label="GitHub">
        <SiGithub />
      </Col>

      {/* Collaboration */}
      <Col xs={4} md={2} className="tech-icons" aria-label="Figma">
        <SiFigma />
      </Col>

      {/* Deployment */}
      <Col xs={4} md={2} className="tech-icons" aria-label="Vercel">
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;
