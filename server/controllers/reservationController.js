const Reservation = require('../models/reservationModel');

const reservationController = {
  createReservation: async (req, res) => {
    try {
      const { user_id, helicopter_id, full_name, email, flight_date, flight_time } = req.body;

      if (!user_id || !helicopter_id || !full_name || !email || !flight_date || !flight_time) {
        return res.status(400).json({ message: "Faltan datos obligatorios" });
      }

      const id = await Reservation.create(req.body);
      res.status(201).json({ message: "Solicitud enviada", id });

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al guardar reserva" });
    }
  },

  getUserReservations: async (req, res) => {
    try {
      const list = await Reservation.getByUserId(req.params.userId);
      res.json(list);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener lista" });
    }
  }
};

module.exports = reservationController;