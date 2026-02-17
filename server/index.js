require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helicopterRoutes = require('./routes/helicopterRoutes');
const authRoutes = require('./routes/authRoutes');
const commentRoutes = require('./routes/commentRoutes');
const reservationRoutes = require('./routes/reservationRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/helicopters', helicopterRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/reservations', reservationRoutes);

app.get('/', (req, res) => {
  res.send('API Skylease funcionando');
});

app.listen(PORT, () => {
console.log(`Servidor corriendo en http://localhost:${PORT}`);
});