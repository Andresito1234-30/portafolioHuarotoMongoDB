import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { authAPI } from "../../services/api";
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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
      return setError("Las contraseñas no coinciden");
    }

    if (formData.password.length < 6) {
      return setError("La contraseña debe tener al menos 6 caracteres");
    }

    setLoading(true);

    try {
      await authAPI.register({
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        password: formData.password,
      });

      setSuccess("¡Cuenta creada exitosamente! Iniciando sesión...");

      setTimeout(async () => {
        try {
          await login(formData.email, formData.password);
          navigate("/");
        } catch (err) {
          setError("Cuenta creada. Por favor, inicia sesión manualmente.");
          setTimeout(() => navigate("/login"), 2000);
        }
      }, 1500);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          err.response?.data?.msg ||
          "Error al registrarse. Intenta de nuevo."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <Container fluid className="auth-section" id="signup">
        <Particle />
        <Container className="auth-content">
          <Row className="align-items-center" style={{ minHeight: "100vh" }}>
