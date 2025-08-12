import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
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
      I’m a <b className="purple">Full Stack Engineer</b> with 2.5+ years of experience
      designing and delivering <b className="purple">scalable, user-focused web and mobile applications</b>.
      <br />
      <br />
      My core expertise includes
      <i>
        <b className="purple"> React.js, Next.js, TypeScript, and Node.js</b>
      </i>{" "}
      — along with hands-on experience in API integrations, backend logic, and database management.
      <br />
      <br />
      I enjoy crafting <b className="purple">intuitive, high-performance interfaces</b>,
      building reusable components, and delivering features that create measurable product impact.
      <br />
      <br />
      Currently completing my <b className="purple">Master’s in IT at QUT</b> (graduating Dec 2025),
      and actively seeking <b className="purple">full-time opportunities</b> with modern product teams
      where I can blend <b className="purple">UI/UX craftsmanship</b> with scalable engineering.
    </p>
  </Col>
  <Col md={4} className="myAvtar">
    <Tilt>
      <img src={myImg} className="img-fluid" alt="avatar" />
    </Tilt>
  </Col>
</Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sandhukaran28"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/karan-sandhu28/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sandhukaran28"
                  target="_blank"
                  rel="noreferrer"
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
