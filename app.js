const express = require('express');
const app = express();
const PORT = 3000;

// Importar rutas
const estudiantesRoutes = require('./routes/estudiantesRoutes');

// Middleware para procesar JSON en las peticiones
app.use(express.json());

// Endpoint base inicial
app.get('/api/saludo', (req, res) => {
    res.status(200).json({
        mensaje: 'Hola estudiantes'
    });
});

// Conectar las rutas del recurso estudiantes
app.use('/api/estudiantes', estudiantesRoutes);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});