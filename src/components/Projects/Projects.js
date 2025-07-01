import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          A selection of projects I've worked on, showcasing frontend development, UI design, and full-stack work.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="EventHive"
              description="Web + mobile event management platform built using React and React Native. Includes bookings, login, and admin panel."
              ghLink="https://github.com/sandhukaran28/EventHive-frontend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="CisoZen Risk Automation"
              description="Integrated backend workflows for a cybersecurity risk tool using Python and REST APIs to automate multi-step milestone tracking."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="SaaS Wellness Dashboard (Remote Startup)"
              description="Led frontend development for a wellness platform using Next.js, Tailwind CSS, and GraphQL. Features onboarding, profile modals, and dashboards."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Ecommerce Shipping Solution"
              description="Angular-based web platform built for a Canadian client. Includes real-time shipping tracking and admin control features."
              demoLink="https://www.eshipper.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Real-Time Flood Alert System"
              description="React app for flood risk alerts using map overlays and sensor API integration. Designed for fast visual communication and response."
              demoLink="https://www.befiqr.in/app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Grabhub – Food Order App"
              description="Full-stack food ordering app using Node.js, Express, MongoDB, and React. Features cart, login, menu system, and admin panel."
              ghLink="https://github.com/sandhukaran28/Grabhub"
            />
          </Col>
        </Row>

        <h2 className="project-subheading" style={{ color: "#fff", marginTop: "2rem" }}>
          Freelance Projects
        </h2>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="KK Spinners (Client Project)"
              description="Product showcase website for a yarn manufacturer. Built using React.js with a custom layout and product sections."
              demoLink="https://kkspinners.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Roamer Technologies (Client Project)"
              description="Frontend website for a Dubai-based services company. Built in React and deployed via Netlify."
              demoLink="https://roamer-technologies.netlify.app/"
            />
          </Col>
        </Row>
      </Container>

      <div style={{ height: "8.5vh" }}></div>
    </Container>
  );
}

export default Projects;
