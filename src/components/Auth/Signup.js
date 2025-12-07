import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { authAPI } from "../../services/api";
import { useAuth } from "../../hooks/useAuth";
import Particle from "../Particle";
import "./Auth.css";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

function Signup() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const change = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword)
      return setError("Las contraseñas no coinciden");

    try {
      setLoading(true);
      await authAPI.register(formData);
      setSuccess("Cuenta creada. Iniciando sesión...");
      await login(formData.email, formData.password);
      navigate("/");
    } catch (err) {
      setError("Error en registro");
    }
    setLoading(false);
  };

  return (
    <section>
      <Container fluid className="auth-section" id="signup">
        <Particle />
        <Container className="auth-content">
          <Row className="align-items-center" style={{ minHeight: "100vh" }}>
            <Col md={6} lg={5} className="mx-auto">
              <div className="auth-card">
                <h1 className="auth-heading">Crear cuenta</h1>

                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}

                <Form onSubmit={submit}>
                  <Form.Group className="mb-4">
                    <div className="input-wrapper">
                      <FaUser className="input-icon" />
                      <Form.Control
                        name="firstname"
                        placeholder="Nombre"
                        value={formData.firstname}
                        onChange={change}
                        required
                      />
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <div className="input-wrapper">
                      <FaUser className="input-icon" />
                      <Form.Control
                        name="lastname"
                        placeholder="Apellido"
                        value={formData.lastname}
                        onChange={change}
                        required
                      />
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <div className="input-wrapper">
                      <FaEnvelope className="input-icon" />
                      <Form.Control
                        name="email"
                        type="email"
                        placeholder="Correo electrónico"
                        value={formData.email}
                        onChange={change}
                        required
                      />
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <div className="input-wrapper">
                      <FaLock className="input-icon" />
                      <Form.Control
                        name="password"
                        type="password"
                        placeholder="Contraseña"
                        value={formData.password}
                        onChange={change}
                        required
                      />
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <div className="input-wrapper">
                      <FaLock className="input-icon" />
                      <Form.Control
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirmar contraseña"
                        value={formData.confirmPassword}
                        onChange={change}
                        required
                      />
                    </div>
                  </Form.Group>

                  <Button className="w-100" type="submit">
                    {loading ? "Registrando..." : "Crear cuenta"}
                  </Button>
                </Form>

                <div className="auth-links">
                  <p>
                    ¿Ya tienes cuenta?{" "}
                    <Link to="/login" className="auth-link">
                      Inicia sesión aquí
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

export default Signup;
