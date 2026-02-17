const Comment = require('../models/commentModel');

const commentController = {
  getComments: async (req, res) => {
    try {
      const { id } = req.params; // ID del helicóptero
      const comments = await Comment.getByHelicopterId(id);
      res.json(comments);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al cargar comentarios" });
    }
  },

  addComment: async (req, res) => {
    try {
      const { user_id, helicopter_id, content } = req.body;
      if (!content || !user_id || !helicopter_id) {
        return res.status(400).json({ message: "Faltan datos" });
      }

      const newId = await Comment.create(user_id, helicopter_id, content);
      res.status(201).json({ message: "Comentario creado", id: newId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al publicar comentario" });
    }
  }
};

module.exports = commentController;