import axios from "axios";

const API_URL =
  process.env.REACT_APP_API_URL ||
  "https://portafoliohuarotomongodb.onrender.com/api/v1";

const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Si token expiró → logout
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      window.location.href = "#/login";
    }
    return Promise.reject(err);
  }
);

export const authAPI = {
  login: (data) => api.post("/auth/login", data),
  register: (data) => api.post("/auth/register", data),
  logout: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
  },
  getAccessToken: () => localStorage.getItem("accessToken"),
  getCurrentUser: () => JSON.parse(localStorage.getItem("user") || "null"),
};

export default api;
