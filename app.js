//-----ejs---------npm install ejs----npm list ejs
// 1.- Importar Express
const express = require('express');

// 2.- Crear aplicacion
const app = express();
const PORT = 3000;

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', './views');
// Datos de ejemplo
let productos = [
  { id: 1, nombre: 'Laptop', precio: 1000 },
  { id: 2, nombre: 'Mouse', precio: 25 },
  { id: 3, nombre: 'Teclado', precio: 50 }
];

// Ruta principal
app.get('/', (req, res) => {
  res.render('index', { productos });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
