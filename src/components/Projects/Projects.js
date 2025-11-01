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
              isBlog={false}
              title="Noteflix – Document → Video"
              description="Full-stack Next.js + Node system that converts documents into narrated videos. AWS Lambda/S3 pipeline with async rendering; designed for scalable media throughput."
              ghLink="https://github.com/sandhukaran28" // add repo if public
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="ESGagent.ai – Compliance Dashboards"
              description="Production dashboards built with Vue 3 + TypeScript + Node/Mongo. Optimized data flows and rendering for responsive, real-time ESG analytics."
              // demoLink can point to a staging/landing if available
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="CisoZen – Risk Automation"
              description="Automated multi-step cybersecurity risk workflows using Python + Node with REST integrations; milestone orchestration for evaluate → register flow."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="EventHive (Web + Mobile)"
              description="Event management platform (React/Next + React Native). Auth, bookings, admin dashboard; API integration and reusable UI components."
              ghLink="https://github.com/sandhukaran28/EventHive-frontend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Real-Time Flood Alert"
              description="React + Node + MongoDB with map overlays and sensor APIs. Built for rapid situational awareness and clear risk visualization."
              demoLink="https://www.befiqr.in/app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Grabhub – Food Order App"
              description="MERN stack app (Node/Express, MongoDB, React). Cart, auth, menu, and admin flows; pragmatic full-stack patterns."
              ghLink="https://github.com/sandhukaran28/Grabhub"
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
              isBlog={false}
              title="KK Spinners (Client)"
              description="Product showcase site for a yarn manufacturer. React build with custom layout and product categorization."
              demoLink="https://kkspinners.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Roamer Technologies (Client)"
              description="Marketing site for a Dubai-based services company. React front end, deployed on Netlify."
              demoLink="https://roamer-technologies.netlify.app/"
            />
          </Col>
        </Row>
      </Container>

      <div style={{ height: "8.5vh" }} />
    </Container>
  );
}

export default Projects;
