# 🔐 Sistema de Autenticación con MongoDB - Guía de Integración

## ✅ Archivos Creados

### Frontend Components
- **`src/components/Auth/Login.js`** - Componente de inicio de sesión
- **`src/components/Auth/Signup.js`** - Componente de registro
- **`src/components/Auth/Auth.css`** - Estilos personalizados
- **`src/components/Auth/ProtectedRoute.js`** - Componente para proteger rutas

### Services & Hooks
- **`src/services/api.js`** - Configuración de axios con interceptores
- **`src/hooks/useAuth.js`** - Hook y contexto de autenticación

### Configuración
- **`.env`** - Variables de entorno

### Actualización
- **`src/App.js`** - Integrado con AuthProvider y nuevas rutas

---

## 🚀 Instrucciones de Uso

### 1. Asegurar que el backend está corriendo

```bash
cd YARNDBBackend
npm install
npm run dev
# Debe estar corriendo en http://localhost:3977
```

### 2. Verificar la variable de entorno

El archivo `.env` debe tener:
```env
REACT_APP_API_URL=http://localhost:3977/api/v1
```

### 3. Instalar dependencias faltantes en el frontend (si es necesario)

La mayoría de dependencias ya están instaladas. Si axios no estuviera:
```bash
npm install axios
```

### 4. Ejecutar el proyecto frontend

```bash
npm start
# Debe estar corriendo en http://localhost:3000
```

### 5. Acceder a las rutas

- **Login:** `http://localhost:3000/login`
- **Signup:** `http://localhost:3000/signup`
- **Home:** `http://localhost:3000/` (requiere autenticación si configuras ProtectedRoute)

---

## 📝 Flujo de Autenticación

### Registro (Signup)
1. Usuario completa el formulario (nombre, apellido, email, contraseña)
2. Frontend valida que las contraseñas coincidan
3. Se envía a `POST /api/v1/auth/register`
4. Backend valida y crea el usuario
5. Si es exitoso, se hace login automático
6. Usuario es redirigido al home

### Inicio de Sesión (Login)
1. Usuario ingresa email y contraseña
2. Se envía a `POST /api/v1/auth/login`
3. Backend valida y retorna `access` y `refresh` tokens
4. Tokens se guardan en `localStorage`
5. Usuario es redirigido al home
6. Todos los requests posteriores incluyen el token en el header

### Refresco de Token
1. Cuando un token `access` expira (error 401)
2. El interceptor automáticamente intenta refrescar usando `refresh` token
3. Si el refresco es exitoso, se continúa con el request original
4. Si falla, usuario es redirigido al login

---

## 🔌 Endpoints del Backend

### Autenticación

**Registro**
```
POST /api/v1/auth/register
Body: {
  firstname: string,
  lastname: string,
  email: string,
  password: string
}
Response: {
  message: "User registered",
  user: { _id, firstname, lastname, email, ... }
}
```

**Login**
```
POST /api/v1/auth/login
Body: {
  email: string,
  password: string
}
Response: {
  msg: "Inicio de sesión exitoso",
  access: token_string,
  refresh: token_string
}
```

**Refrescar Token**
```
POST /api/v1/auth/refresh-access-token
Body: {
  token: refresh_token_string
}
Response: {
  accessToken: new_token_string
}
```

---

## 🎨 Personalización

### Cambiar colores
Edita `src/components/Auth/Auth.css`:
```css
/* Cambia estos valores */
--primary-blue: #58a6ff;
--secondary-blue: #1f6feb;
--dark-bg: #0c1117;
```

### Cambiar duración de tokens
En el backend, edita `utils/jwt.js`:
```javascript
// Access token: 15 minutos
expToken.setMinutes(expToken.getMinutes() + 15);

// Refresh token: 1 mes
expToken.setMonth(expToken.getMonth() + 1);
```

### Agregar más validaciones
Edita `src/components/Auth/Signup.js` o `Login.js` para agregar:
- Validación de formato de email más estricto
- Validación de fortaleza de contraseña
- Rate limiting

---

## 🛡️ Proteger Rutas

Para proteger una ruta y que solo usuarios autenticados puedan acceder:

```javascript
import ProtectedRoute from "./components/Auth/ProtectedRoute";

// En las rutas
<Route 
  path="/admin" 
  element={<ProtectedRoute element={<AdminPanel />} />} 
/>
```

---

## 🔑 Usar el Hook de Autenticación en Componentes

```javascript
import { useAuth } from "../hooks/useAuth";

function MyComponent() {
  const { user, isAuthenticated, logout, login, signup } = useAuth();

  return (
    <div>
      {isAuthenticated && (
        <>
          <p>Hola, {user.email}</p>
          <button onClick={logout}>Cerrar sesión</button>
        </>
      )}
      {!isAuthenticated && (
        <a href="/login">Inicia sesión</a>
      )}
    </div>
  );
}
```

---

## 📊 Estructura de Tokens

### Access Token (JWT - 15 minutos)
```json
{
  "token_type": "access",
  "user_id": "mongo_id",
  "iat": 1234567890,
  "exp": 1234567890
}
```

### Refresh Token (JWT - 1 mes)
```json
{
  "token_type": "refresh",
  "user_id": "mongo_id",
  "iat": 1234567890,
  "exp": 1234567890
}
```

---

## 🐛 Troubleshooting

### Error: "Cannot find module 'axios'"
```bash
npm install axios
```

### Error: CORS
Verifica que el backend tiene CORS habilitado. En `YARNDBBackend/app.js` debe estar:
```javascript
const cors = require('cors');
app.use(cors());
```

### Error: "Token inválido o expirado"
- Verifica que la `JWT_SECRET_KEY` en `YARNDBBackend/constante.js` coincida
- Limpia localStorage y vuelve a iniciar sesión
- Verifica que los relojes del servidor y cliente estén sincronizados

### Error: 401 Unauthorized
El token expiró. El interceptor debe refrescarlo automáticamente. Si sigue dando error:
- Limpia localStorage
- Inicia sesión de nuevo

### La aplicación se queda en "Cargando..."
- Verifica que el backend esté corriendo
- Verifica la URL en `.env`
- Abre la consola del navegador para ver errores

---

## 📚 Variables de Entorno

**Frontend (.env)**
```env
REACT_APP_API_URL=http://localhost:3977/api/v1  # Desarrollo
REACT_APP_API_URL=https://api.tusitio.com        # Producción
```

**Backend (YARNDBBackend/.env o constante.js)**
```javascript
const DB_USER = "andresito";
const DB_PASSWORD = "admin123";
const DB_HOST = "@undce.yb0rshw.mongodb.net";
const JWT_SECRET_KEY = "tu_clave_secreta_super_segura";
```

⚠️ **IMPORTANTE:** Cambia `JWT_SECRET_KEY` por algo seguro en producción.

---

## ✨ Próximos Pasos

1. ✅ Frontend lista
2. ✅ Backend funcionando
3. 🔲 Personalizar datos del usuario (agregar fields adicionales)
4. 🔲 Implementar "Olvidé mi contraseña"
5. 🔲 Implementar verificación de email
6. 🔲 Agregar 2FA (Two-Factor Authentication)
7. 🔲 Desplegar a producción

---

¡Listo! Tu sistema de autenticación está completamente integrado. 🎉
