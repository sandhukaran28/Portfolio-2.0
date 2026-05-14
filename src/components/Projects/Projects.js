import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" aria-label="Projects">
          Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          A curated set of builds highlighting frontend craft, full-stack
          delivery, and performance work.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              title="NoteFlix — PDF to Video Platform"
              description="Converts PDFs into videos with AI scripting, narration, and synchronized document visuals. Built on an async AWS Lambda pipeline with job tracking, retries, and progress updates for reliable processing at scale."
              ghLink="https://github.com/sandhukaran28/Noteflix-App"
              demoLink="https://noteflix-app.vercel.app/"
              tags={["Next.js", "Node.js", "MongoDB", "AWS Lambda", "LLM"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="CisoZen — AI Risk Analysis"
              description="Python-based pipeline integrating LLMs to analyse unstructured compliance data and generate structured cybersecurity risk records. Includes validation, logging, and error handling for audit requirements."
              ghLink="https://github.com/sandhukaran28/Cisozen-AI"
              tags={["Python", "LLM", "Claude API", "REST"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="BeFIQR — Government Flood Management"
              description="Real-time flood monitoring system built for the Bihar State Government. Captures live water data from dams and embankments, generates flood alerts, and triggers emergency communications. Showcased at India Water Week 2024."
              demoLink="https://www.befiqr.in/app/"
              tags={["React", "React Native", "Node.js", "MongoDB"]}
            />
          </Col>
        </Row>

        <h2
          className="project-subheading"
          style={{ color: "#fff", marginTop: "2rem" }}
          aria-label="Freelance work"
        >
          Freelance Projects
        </h2>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              title="KK Spinners — Client Website"
              description="Product showcase site with custom layout and category-based browsing for a yarn manufacturer."
              demoLink="https://kkspinners.in/"
              tags={["React", "Netlify"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Roamer Technologies — Client Website"
              description="Responsive marketing site for a services company, built and deployed with a lightweight React setup."
              demoLink="https://roamer-technologies.netlify.app/"
              tags={["React", "Netlify"]}
            />
          </Col>
        </Row>
      </Container>

      <div style={{ height: "8.5vh" }} />
    </Container>
  );
}

export default Projects;
