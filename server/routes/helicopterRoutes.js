const express = require('express');
const router = express.Router();
const controller = require('../controllers/helicopterController');

router.get('/', controller.getHelicopters);
router.get('/:id', controller.getHelicopterById);

module.exports = router;