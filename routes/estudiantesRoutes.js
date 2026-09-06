const express = require('express');
const router = express.Router();
const { obtenerEstudiantes, crearEstudiante } = require('../controllers/estudiantesController');

// Rutas para /api/estudiantes
router.get('/', obtenerEstudiantes);
router.post('/', crearEstudiante);

module.exports = router;