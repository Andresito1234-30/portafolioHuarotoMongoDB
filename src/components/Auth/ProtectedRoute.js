import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

/**
 * Componente que protege rutas requiriendo autenticación
 * @param {JSX.Element} element - Componente a renderizar
 * @returns {JSX.Element} - Componente protegido o redirección al login
 */
function ProtectedRoute({ element }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Cargando...</div>;
  }

  return isAuthenticated ? element : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
