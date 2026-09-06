// Arreglo temporal en memoria para almacenar estudiantes
const estudiantes = [
    { id: 1, nombre: 'Ana García', carrera: 'Ingeniería en Sistemas' },
    { id: 2, nombre: 'Carlos López', carrera: 'Ingeniería en Sistemas' }
];

// Obtener todos los estudiantes (GET)
const obtenerEstudiantes = (req, res) => {
    res.status(200).json({
        total: estudiantes.length,
        datos: estudiantes
    });
};

// Registrar un nuevo estudiante (POST) con validación
const crearEstudiante = (req, res) => {
    const { nombre, carrera } = req.body;

    // Validación básica de campos requeridos
    if (!nombre || !carrera) {
        return res.status(400).json({
            error: 'Los campos "nombre" y "carrera" son obligatorios.'
        });
    }

    const nuevoEstudiante = {
        id: estudiantes.length + 1,
        nombre,
        carrera
    };

    estudiantes.push(nuevoEstudiante);

    // 201 indica que el recurso fue creado con éxito
    return res.status(201).json({
        mensaje: 'Estudiante registrado correctamente',
        estudiante: nuevoEstudiante
    });
};

module.exports = {
    obtenerEstudiantes,
    crearEstudiante
};