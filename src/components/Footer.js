import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const hideLogout =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Correo electrónico: 2411010094@undc.edu.pe</h3>
        </Col>

        <Col md="4" className="footer-copywright">
          <h3>IV ciclo | 2025 - II | TB2</h3>
        </Col>

        <Col
          md="4"
          className="footer-body"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "15px",
          }}
        >
          {!hideLogout && (
            <button
              onClick={() => {
                logout();
                navigate("/login");
              }}
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
                href="https://www.linkedin.com/in/huaroto-yurihuaman-andre-leosan-27b915332"
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
