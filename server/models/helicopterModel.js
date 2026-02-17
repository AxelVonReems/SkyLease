const db = require('../config/db');

const Helicopter = {
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM helicopters');
    return rows;
  },
  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM helicopters WHERE id = ?', [id]);
    return rows[0];
  }
};

module.exports = Helicopter;