const bcrypt = require("bcryptjs");
const User = require("../models/user");

//para login
const jwt = require("../utils/jwt");

//para token
const {JWT_SECRET_KEY} = require("../constante");

async function register(req, res) {
  try {
    const { firstname, lastname, email, password, role } = req.body || {};

    if (!email) return res.status(400).json({ message: "El email es obligatorio" });
    if (!password) return res.status(400).json({ message: "La contraseña es obligatoria" });

    // Guardar el email en minúsculas
    const emaillowerCase = email.toLowerCase();
    const user = new User({
      firstname: firstname || "",
      lastname: lastname || "",
      email: emaillowerCase,
      role: role || "user",
      active: true,
      avatar: null,
    });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Save to DB
    const savedUser = await user.save();

    // Log the registration to the server console (visible in the terminal running `npm start`)
    console.log('New user registered:', savedUser.toObject());

    // Remove password before returning to client
    const userObj = savedUser.toObject(); 

    return res.status(201).json({ message: "User registered", user: userObj });
  } catch (err) {
    console.error("Error registering user:", err);
    if (err && err.code === 11000) {
      return res.status(400).json({ message: "Email already exists" });
    }
    return res.status(500).json({ message: "Error registering user", error: err.message });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: "El email y la contraseña son obligatorios" });
    }

    const emaillowerCase = email.toLowerCase();
    const userStore = await User.findOne({ email: emaillowerCase });

    if (!userStore) {
      return res.status(404).json({ msg: "El usuario no existe" });
    }

    const passwordMatch = await bcrypt.compare(password, userStore.password);
    if (!passwordMatch) {
      return res.status(400).json({ msg: "Contraseña incorrecta" });
    }

    if (!userStore.active) {
      return res.status(401).json({ msg: "Usuario no autorizado o inactivo" });
    }

    const accessToken = jwt.createAccessToken(userStore);
    const refreshToken = jwt.createRefreshToken(userStore);

    return res.status(200).json({
      msg: "Inicio de sesión exitoso",
      access: accessToken,
      refresh: refreshToken,
    });

  } catch (error) {
    console.error("Error en login:", error);
    return res.status(500).json({ msg: "Error del servidor", error: error.message });
  }
}

// Función accessToken
async function refreshAccessToken(req, res) {
  try {
    const { token } = req.body;
    if (!token) {
      return res.status(400).send({ msg: "Token requerido" });
    }

    // 🧩 Verificar y decodificar token (con validación de firma y expiración)
    let payload;
    try {
      payload = jwt.verify(token);
    } catch (error) {
      return res.status(400).send({ msg: "Token inválido o expirado" });
    }

    const { user_id } = payload;

    // 🧩 Buscar usuario con await
    const userStorage = await User.findById(user_id);

    if (!userStorage) {
      return res.status(404).send({ msg: "Usuario no encontrado" });
    }

    // 🧩 Crear nuevo access token
    const accessToken = jwt.createAccessToken(userStorage);

    return res.status(200).send({ accessToken });

  } catch (error) {
    console.error("Error en refreshAccessToken:", error);
    return res.status(500).send({ msg: "Error del servidor" });
  }
}



module.exports = {
  register,
  login,
  refreshAccessToken,
};
