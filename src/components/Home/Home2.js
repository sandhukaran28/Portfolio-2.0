import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I’m a <b className="purple">Full-Stack Engineer</b> with ~3 years
              building scalable, production-grade applications serving thousands of active users.
              <br />
              <br />
              My core stack:{" "}
              <i>
                <b className="purple">
                  React, Next.js, TypeScript, Node.js, AWS
                </b>
              </i>{" "}
              (plus hands-on with GraphQL and REST). I also have practical
              experience with{" "}
              <i>
                <b className="purple">Vue, Angular, and React Native</b>
              </i>{" "}
              from real client projects.
              <br />
              <br />
              I care about{" "}
              <b className="purple">performance and DX</b>: code-splitting,
              caching, and clean component architecture—contributing to{" "}
              <b className="purple">35–40% faster</b> dashboards and smoother
              real-time UX.
              <br />
              <br />
              I recently finished my{" "}
              <b className="purple">Master of IT (QUT)</b> and I’m actively
              looking for a <b className="purple">remote frontend/full-stack</b>{" "}
              role where I can blend <b className="purple">UI craft</b> with{" "}
              <b className="purple">scalable engineering</b>.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt glareEnable glareMaxOpacity={0.2} scale={1.02}>
              <img src={myImg} className="img-fluid" alt="Karan Sandhu avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sandhukaran28"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/karan-sandhu28/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sandhukaran28"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Instagram"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
