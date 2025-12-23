import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaRegFileAlt } from "react-icons/fa";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title style={{ textAlign: "left" }}>{props.title}</Card.Title>

        {/* Optional tags */}
        {props.tags?.length ? (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", margin: "10px 0 14px" }}>
            {props.tags.map((t) => (
              <span
                key={t}
                className="project-tag"
                style={{
                  fontSize: "0.8rem",
                  padding: "4px 10px",
                  borderRadius: "999px",
                  border: "1px solid rgba(199,112,240,0.5)",
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}

        <Card.Text style={{ textAlign: "justify" }}>{props.description}</Card.Text>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "14px" }}>
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank" rel="noreferrer">
              <BsGithub /> &nbsp; GitHub
            </Button>
          )}

          {props.demoLink && (
            <Button variant="primary" href={props.demoLink} target="_blank" rel="noreferrer">
              <CgWebsite /> &nbsp; Live Demo
            </Button>
          )}

          {props.caseStudyLink && (
            <Button variant="outline-light" href={props.caseStudyLink}>
              <FaRegFileAlt /> &nbsp; Case Study
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
