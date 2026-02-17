const db = require('../config/db');

const Reservation = {
  create: async (data) => {
    const { 
      user_id, helicopter_id, full_name, email, phone, flight_date, flight_time, comments 
    } = data;

    const query = `
      INSERT INTO reservations 
      (user_id, helicopter_id, full_name, email, phone, flight_date, flight_time, comments) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const [result] = await db.query(query, [
      user_id, helicopter_id, full_name, email, phone, flight_date, flight_time, comments
    ]);
    return result.insertId;
  },

  getByUserId: async (userId) => {
    const query = `
      SELECT r.*, h.brand, h.model, h.image
      FROM reservations r
      JOIN helicopters h ON r.helicopter_id = h.id
      WHERE r.user_id = ?
      ORDER BY r.flight_date DESC
    `;
    const [rows] = await db.query(query, [userId]);
    return rows;
  }
};

module.exports = Reservation;