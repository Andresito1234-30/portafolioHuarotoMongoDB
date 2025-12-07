import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Particle from "../Particle";
import "./Auth.css";
import { FaEnvelope, FaLock } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const expired = localStorage.getItem("sessionExpired");
    if (expired) {
      setError("⏳ Tu sesión ha expirado. Vuelve a iniciar sesión.");
      localStorage.removeItem("sessionExpired");
    }
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.msg || "Error en inicio de sesión.");
    }

    setLoading(false);
  };

  return (
    <section>
      <Container fluid className="auth-section" id="login">
        <Particle />
        <Container className="auth-content">
          <Row className="align-items-center" style={{ minHeight: "100vh" }}>
            <Col md={6} lg={5} className="mx-auto">
              <div className="auth-card">
                <h1 className="auth-heading">Bienvenido de vuelta</h1>

                {error && <div className="alert alert-danger">{error}</div>}

                <Form onSubmit={submit}>
                  <Form.Group className="mb-4">
                    <div className="input-wrapper">
                      <FaEnvelope className="input-icon" />
                      <Form.Control
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <div className="input-wrapper">
                      <FaLock className="input-icon" />
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <button
                        type="button"
                        className="show-password-btn"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        👁️
                      </button>
                    </div>
                  </Form.Group>

                  <Button className="w-100" type="submit">
                    {loading ? "Cargando..." : "Iniciar sesión"}
                  </Button>
                </Form>

                <div className="auth-links">
                  <p>
                    ¿No tienes cuenta?{" "}
                    <Link to="/signup" className="auth-link">
                      Regístrate
                    </Link>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Login;
