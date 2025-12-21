import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A BIT ABOUT ME
            </h1>

            <p className="home-about-body">
              I’m a <b className="purple">Full-Stack Engineer</b>{" "}
              (frontend-leaning) building production web apps with a focus on
              performance, reliability, and clean UI architecture.
              <br />
              <br />
              Core stack:{" "}
              <i>
                <b className="purple">
                  React, Next.js, TypeScript, Node.js, AWS
                </b>
              </i>{" "}
              — plus experience integrating{" "}
              <b className="purple">REST/GraphQL</b>, authentication, and
              scalable data flows.
              <br />
              <br />I care about <b className="purple">performance & DX</b>:
              code-splitting, caching, component design systems, and predictable
              state management — shipping faster dashboards and smoother
              real-time UX.
              <br />
              <br />
              Based in <b className="purple">Brisbane, Australia</b>. Open to{" "}
              <b className="purple">frontend / full-stack</b> roles (remote or
              hybrid).
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt glareEnable glareMaxOpacity={0.2} scale={1.02}>
              <img
                src={myImg}
                className="img-fluid"
                alt="Karan Sandhu avatar"
              />
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
                  href="mailto:sandhukaran2821@gmail.com"
                  aria-label="Email"
                  className="icon-colour home-social-icons"
                >
                  <MdEmail />
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
