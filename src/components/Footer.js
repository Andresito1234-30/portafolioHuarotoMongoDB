import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Correo electrónico: 2411010094@undc.edu.pe</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>IV ciclo | 2025 - II | TB2</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Andresito1234-30"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li> 
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/huaroto-yurihuaman-andre-leosan-27b915332?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BeBuhrbq7QZuHPKJMCnM3CA%3D%3D"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li> 
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
