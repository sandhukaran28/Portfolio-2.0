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
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="KK Spinners"
              description="Web application built using Reactjs to display products offered by India based yarn producing company."
              demoLink="https://kkspinners.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Roamer Technologies"
              description="Web application built using Reactjs for a Dubai based organisation providing wide range of online services to customers."
              demoLink="https://roamer-technologies.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Shopify"
              description="Full Stack Ecommerce web application which has features like login, register, cart, adding new product by admin and checkoout."
              ghLink="https://github.com/sandhukaran28/Shopify"
            />
          </Col>

            
        </Row>
      </Container>
      <div style={{height: '8.5vh'}}>

      </div>
    </Container>
  );
}

export default Projects;
