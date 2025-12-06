import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

function Footer() { 

  const location = useLocation();
  const navigate = useNavigate();

  // Ocultar logout en login y signup
  const hideLogout = location.pathname === "/login" || location.pathname === "/signup";

  // Función de logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Elimina el token (ajustar si usas otro método)
    navigate("/login");
  };

  return (
    <Container fluid className="footer">
      <Row>

        <Col md="4" className="footer-copywright">
          <h3>Correo electrónico: 2411010094@undc.edu.pe</h3>
        </Col>

        <Col md="4" className="footer-copywright">
          <h3>IV ciclo | 2025 - II | TB2</h3>
        </Col>

        <Col md="4" className="footer-body" style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "15px" }}>
          
          {/* SOLO SE MUESTRA CUANDO ESTÁS DENTRO DEL PORTAFOLIO */}
          {!hideLogout && (
            <button
              onClick={handleLogout}
              style={{
                background: "transparent",
                border: "1px solid white",
                padding: "6px 12px",
                borderRadius: "5px",
                color: "white",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          )}

          <ul className="footer-icons" style={{ display: "flex", margin: 0 }}>
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
