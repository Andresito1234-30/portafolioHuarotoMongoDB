import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMÍTAME <span className="purple">PRESENTARME</span>:
            </h1>
            <p className="home-about-body">
              Soy un estudiante de Ingeniería de Sistemas apasionado por la tecnología, el desarrollo de software y la ciberseguridad. Me gusta transformar ideas en soluciones digitales funcionales, eficientes y con un enfoque práctico.
              <br />
              <br />
              A lo largo de mi formación he trabajado con diversos lenguajes y herramientas como
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, Tailwind, HTML, Node.js, y CSS{" "}
                </b>
              </i>
              — disfrutando siempre el proceso de desarrollo.
              <br />
              <br />
              Disfruto diseñar aplicaciones que combinan un
              <i>
                <b className="purple">
                  {" "}
                  backend sólido con una interfaz clara e intuitiva,{" "}
                </b>
              </i>
              aplicando siempre lógica estructurada y buenas prácticas.
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
