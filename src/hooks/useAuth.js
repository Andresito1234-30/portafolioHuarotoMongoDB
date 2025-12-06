import { useState, useEffect, useContext, createContext } from "react";
import { authAPI } from "../services/api";

// Crear contexto de autenticación
export const AuthContext = createContext();

// Hook personalizado para usar el contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de AuthProvider");
  }
  return context;
};

// Proveedor de autenticación
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Verificar si hay token al cargar la app
  useEffect(() => {
    const accessToken = authAPI.getAccessToken();
    if (accessToken) {
      const currentUser = authAPI.getCurrentUser();
      setUser(currentUser);
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  // Login
  const login = async (email, password) => {
    try {
      const response = await authAPI.login({ email, password });
      
      // CREADO PARA CERRAR SESIÓN SÍ O SÍ
      const { access } = response.data;

      /*DESAHIBILITADO PARA CERRAR SESIÓN SÍ O SÍ
      const { access, refresh, message } = response.data;*/

      // Guardar tokens en localStorage
      localStorage.setItem("accessToken", access);
      
      /* Guardar refresh token si existe (DESAHIBILITADO PARA CERRAR SESIÓN SÍ O SÍ)
      localStorage.setItem("refreshToken", refresh);*/

      // Crear objeto usuario básico (el backend no retorna datos del usuario completos)
      const userData = {
        email,
      };
      localStorage.setItem("user", JSON.stringify(userData));

      setUser(userData);
      setIsAuthenticated(true);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  // Signup
  const signup = async (userData) => {
    try {
      const response = await authAPI.register(userData);
      // El backend no retorna tokens en register, solo retorna el usuario creado
      // Deberías hacer login después del registro
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  // Logout
  const logout = () => {
    authAPI.logout();
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
