import React from "react";
import { Col, Row } from "react-bootstrap"; 
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg"; 
import Java from "../../Assets/TechIcons/Java.svg"; 
import Git from "../../Assets/TechIcons/Git.svg";  
import Docker from "../../Assets/TechIcons/Docker.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg"; 
import Tailwind from "../../Assets/TechIcons/Tailwind.svg"; 
import PHP from "../../Assets/TechIcons/PHP.svg"; 
import HTML from "../../Assets/TechIcons/html-5.svg"; 
import XAMMP from "../../Assets/TechIcons/xampp (1).svg"; 
import oauth from "../../Assets/TechIcons/oauth.svg"; 
import vitejs from "../../Assets/TechIcons/vitejs.svg"; 

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
       
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">Javascript</div>
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="node" />
        <div className="tech-icons-text">Node.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React.Js</div>
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="mongoDb" />
        <div className="tech-icons-text">Mongo DB</div>
      </Col> 
 
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="docker" />
        <div className="tech-icons-text">Docker</div>
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="haskell" />
        <div className="tech-icons-text">Java</div>
      </Col> 

      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="tailwind" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>  

      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">SQL</div>
      </Col>  

      <Col xs={4} md={2} className="tech-icons">
        <img src={PHP} alt="php" />
        <div className="tech-icons-text">  PHP  </div>
      </Col>  

      <Col xs={4} md={2} className="tech-icons">
        <img src={HTML} alt="html-5" />
        <div className="tech-icons-text">  HTML-5  </div>
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <img src={XAMMP} alt="xammp" />
        <div className="tech-icons-text">  XAMMP  </div>
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <img src={oauth} alt="oauth" />
        <div className="tech-icons-text">  OAuth  </div>
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <img src={vitejs} alt="vitejs" />
        <div className="tech-icons-text">  ViteJs  </div>
      </Col>  
    </Row>
  );
}

export default Techstack;
