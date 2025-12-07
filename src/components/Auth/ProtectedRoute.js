import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { jwtDecode } from "jwt-decode";

function ProtectedRoute({ element }) {
  const { isAuthenticated } = useAuth();
  const token = localStorage.getItem("accessToken");

  if (!isAuthenticated || !token) return <Navigate to="/login" replace />;

  try {
    const decoded = jwtDecode(token);
    if (decoded.exp * 1000 < Date.now()) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      return <Navigate to="/login" replace />;
    }
  } catch (e) {
    return <Navigate to="/login" replace />;
  }

  return element;
}

export default ProtectedRoute;
