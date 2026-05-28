//NECESARIO PARA PROCESAR FORMULARIOS
// 1.- Importar Express
const express = require('express');

// 2.- Crear aplicacion
const app = express();
const PORT = 3000;

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', './views');

// ✅ MIDDLEWARE NECESARIO PARA PROCESAR FORMULARIOS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());  // Opcional: para peticiones JSON

app.use(express.urlencoded({ extended: true }));
// Datos de ejemplo
let productos = [
  { id: 1, nombre: 'Laptop', precio: 1000 },
  { id: 2, nombre: 'Mouse', precio: 25 },
  { id: 3, nombre: 'Teclado', precio: 50 }
];

let nextId = 4;

// POST - Crear un nuevo producto
app.post('/productos', (req, res) => {
  const { nombre, precio } = req.body;
  
  if (!nombre || !precio) {
    return res.send('<h1>Error</h1><p>Faltan nombre o precio</p><a href="/">Volver</a>');
  }
  
  const nuevoProducto = {
    id: nextId++,
    nombre: nombre,
    precio: parseFloat(precio)
  };
  
  productos.push(nuevoProducto);
  res.redirect('/');
});

// Ruta principal
app.get('/', (req, res) => {
  res.render('index', { productos });
});



// Ruta para ver un producto específico
app.get('/producto/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const producto = productos.find(p => p.id === id);
  
  if (!producto) {
    return res.send(`
      <h1>Producto no encontrado</h1>
      <a href="/">Volver al inicio</a>
    `);
  }
  
  res.render('producto', { producto });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
