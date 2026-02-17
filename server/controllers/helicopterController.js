const Helicopter = require('../models/helicopterModel');

const controller = {
  getHelicopters: async (req, res) => {
    try {
      const helicopters = await Helicopter.getAll();
      res.json(helicopters);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener datos' });
    }
  },
  getHelicopterById: async (req, res) => {
    try {
      const helicopter = await Helicopter.getById(req.params.id);
      if (!helicopter) return res.status(404).json({ message: 'No encontrado' });
      res.json(helicopter);
    } catch (error) {
      res.status(500).json({ message: 'Error al buscar helicóptero' });
    }
  }
};

module.exports = controller;