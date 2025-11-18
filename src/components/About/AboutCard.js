import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            ¡Hola a todos! Soy <span className="purple">André Huaroto,</span>{" "}
            estudiante de Ingeniería de Sistemas en la Universidad Nacional de Cañete, <span className="purple">Cañete, Lima</span>.
            <br />
            Apasionado por la tecnología,{" "}
            <span className="purple">el desarrollo de software y la ciberseguridad.</span>
            <br />
            <br />
            Fuera del código, me gusta seguir actividades que me mantienen motivado, creativo y aprendiendo constantemente:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugar Videojuegos 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Ver películas y series 📽️ 
            </li>
            <li className="about-activity">
              <ImPointRight /> Escuchar Rocksito Punk🤘🎸
            </li>
          </ul> 
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
