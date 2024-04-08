const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb://localhost:27017/transporte';

mongoose.connect(MONGODB_URI)
    .then(() => console.log('Conexión exitosa a la base de datos'))
    .catch(err => console.error('Error al conectar a la base de datos:', err));

app.use(express.json());

// Ruta para registrar un nuevo usuario
app.post('/registro', async (req, res) => {
    try {
        const { nombre, apellido, email, contraseña } = req.body;
        console.log('Datos recibidos:', req.body); // Registro de los datos recibidos
        // Aquí iría tu lógica para registrar el usuario en la base de datos
        res.status(201).json({ message: 'Usuario registrado correctamente' });
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Configurar Express para servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Ruta para la página de inicio
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
