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
            <h1 style={{ fontSize: "2.6em" }}>A BIT ABOUT ME</h1>

            <p className="home-about-body">
              I'm a <b className="purple">Full-Stack Engineer</b> with 3+ years
              building{" "}
              <b className="purple">
                AI-powered, production-grade web applications
              </b>{" "}
              across SaaS, compliance, health-tech, and government domains.
              <br />
              <br />I currently build AI agents at{" "}
              <b className="purple">ESGAgent</b> in Brisbane, where I designed a
              pipeline using the <b className="purple">Claude API</b> that
              processes <b className="purple">50,000+ documents</b> and reduces
              months of manual work to 2-3 hours.
              <br />
              <br />
              Core stack:{" "}
              <i>
                <b className="purple">
                  React, Vue 3, TypeScript, Node.js, GraphQL, AWS
                </b>
              </i>{" "}
              — plus hands-on experience with{" "}
              <b className="purple">
                LLM integrations, Claude Code, and GitHub Copilot
              </b>{" "}
              as a genuine part of daily development.
              <br />
              <br />
              Based in <b className="purple">Brisbane, Australia</b>. Open to{" "}
              <b className="purple">remote full-stack or frontend</b> roles
              globally.
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
