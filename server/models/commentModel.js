const db = require('../config/db');

const Comment = {
  getByHelicopterId: async (helicopterId) => {
    const query = `
      SELECT c.*, u.username 
      FROM comments c
      JOIN users u ON c.user_id = u.id 
      WHERE c.helicopter_id = ? 
      ORDER BY c.created_at DESC
    `;
    const [rows] = await db.query(query, [helicopterId]);
    return rows;
  },

  create: async (userId, helicopterId, content) => {
    const query = 'INSERT INTO comments (user_id, helicopter_id, content) VALUES (?, ?, ?)';
    const [result] = await db.query(query, [userId, helicopterId, content]);
    return result.insertId;
  }
};

module.exports = Comment;