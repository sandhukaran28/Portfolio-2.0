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
          A curated set of builds highlighting frontend craft, full-stack delivery, and performance work.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Noteflix — Document → Video"
              description="Converts documents into narrated videos via an async media pipeline. Built for scalable throughput with background processing and AWS storage."
              ghLink="https://github.com/sandhukaran28/Podcast-Generation" // replace with repo if public
              tags={["Next.js", "Node.js", "AWS"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="CisoZen — Risk Automation"
              description="Automated milestone-based cybersecurity risk workflows (evaluate → register) with reliable orchestration, validation, and REST integrations."
              ghLink="https://github.com/sandhukaran28/Cisozen-AI"
              tags={["Python", "Node.js", "REST"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="EventHive — Web + Mobile"
              description="Event management platform with auth, bookings, admin dashboard, and reusable UI components. Shared backend across web + React Native app."
              ghLink="https://github.com/sandhukaran28/EventHive-frontend"
              tags={["React", "Next.js", "React Native", "Node.js"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Flood Alert — Real-Time Monitoring"
              description="Realtime monitoring dashboard with map overlays and sensor APIs for situational awareness and clear risk visualisation."
              demoLink="https://www.befiqr.in/app/"
              tags={["React", "Node.js", "MongoDB"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Grabhub — Food Order App"
              description="Food ordering app with cart, auth, menu browsing, and admin workflows. Built end-to-end with clean full-stack patterns."
              ghLink="https://github.com/sandhukaran28/Grabhub"
              tags={["React", "Node/Express", "MongoDB"]}
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
