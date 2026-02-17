const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const authController = {
  register: async (req, res) => {
    try {
      const { username, email, password } = req.body;

      if (!username || !email || !password) {
        return res.status(400).json({ message: "Faltan datos" });
      }

      const existingUser = await User.findByEmail(email);
      if (existingUser) {
        return res.status(400).json({ message: "El email ya está registrado" });
      }

      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const userId = await User.create({ username, email, password: hashedPassword });

      res.status(201).json({ message: "Usuario registrado con éxito", userId });

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error en el servidor al registrar" });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findByEmail(email);
      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Contraseña incorrecta" });
      }

      const token = jwt.sign(
        { id: user.id, role: user.role }, 
        process.env.JWT_SECRET || 'secreto_super_seguro', // Usa la clave del .env
        { expiresIn: '2h' }
      );

      res.json({
        message: "Login correcto",
        token,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role
        }
      });

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al iniciar sesión" });
    }
  }
};

module.exports = authController;