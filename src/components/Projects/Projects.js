import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import css2 from "../../Assets/Projects/css2.png";
import css3 from "../../Assets/Projects/css3.png";
import tailwind from "../../Assets/Projects/tailwind.png";
import javPort from "../../Assets/Projects/javPort.png"; 

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis proyectos durante <strong className="purple">este semestre </strong>
        </h1>
        <p style={{ color: "white" }}>
          Estos son algunos pequeños proyectos que se realizaron durante <strong className="purple">el semestre 2025-II </strong>, en el curso de <strong className="purple">Desarrollo Web Full Stack </strong>.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={css2}
              isBlog={false}
              title="Página con CSS3 Básico"
              description="Esta sección presenta una página web desarrollada con CSS3 básico, donde aplico conceptos fundamentales de estilos para dar estructura, color y organización visual a una interfaz. Incluye el uso de propiedades esenciales como márgenes, paddings, fuentes, colores, bordes y alineaciones. Es un ejemplo sencillo pero funcional de cómo transformo una página HTML estática en un diseño más atractivo y ordenado mediante hojas de estilo en cascada."
              ghLink="https://andresito1234-30.github.io/SEMANA05-DESARROLLOWEB/pages/CSS2.html" 
            />
          </Col>

          <Col md={4} className="Página con CSS3, Responsive y Animaciones">
            <ProjectCard
              imgPath={css3}
              isBlog={false}
              title="Página con CSS3, Responsive y Animaciones"
              description="En esta sección muestro una página diseñada con CSS3, incorporando técnicas de diseño responsive para adaptarse correctamente a diferentes dispositivos y tamaños de pantalla. También implementé animaciones y transiciones que mejoran la experiencia visual del usuario, manteniendo un diseño limpio, dinámico y moderno. Es un ejemplo práctico de cómo combinar estilos avanzados con usabilidad."
              ghLink="https://andresito1234-30.github.io/SEMANA05-DESARROLLOWEB/pages/CSS3.html" 
            />
          </Col>

          <Col md={4} className="Página utilizando Tailwind CSS">
            <ProjectCard
              imgPath={tailwind}
              isBlog={false}
              title="Página utilizando Tailwind CSS"
              description="Aquí presento una página construida con Tailwind CSS, un framework utilitario que permite crear interfaces de forma rápida, ordenada y altamente personalizable. En este proyecto apliqué clases utilitarias para maquetar, diseñar y estructurar la página sin necesidad de escribir CSS tradicional. El resultado es un diseño limpio, responsivo y optimizado, demostrando mi capacidad para trabajar con herramientas modernas del frontend."
              ghLink="https://andresito1234-30.github.io/SEMANA05-DESARROLLOWEB/pages/tailwind/tailwind.html"   
            />
          </Col>

          <Col md={4} className="Página implementando HTML, CSS y JS">
            <ProjectCard
              imgPath={javPort}
              isBlog={false}
              title="Página implementando HTML, CSS, JS y Correo - JS"
              description="Esta página integra HTML, CSS y JavaScript para construir una interfaz funcional e interactiva. Utilicé HTML para la estructura, CSS para la presentación y JS para agregar lógica, efectos y dinamismo. Adicionalmente, se agregó tambipen la función de enviar mensajes mediante correo electrónicos. Este proyecto refleja mi dominio de las bases del desarrollo web y mi habilidad para unir estas tecnologías fundamentales en una experiencia completa y fluida."
              ghLink="https://andresito1234-30.github.io/SEMANA05-DESARROLLOWEB/pages/portafolioScript.html" 
            />
          </Col>
 
 
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
