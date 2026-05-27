// 1.- Importar Express
const express = require('express');

// 2.- Crear aplicacion
const app = express();
const PORT = 3000;

const mi_variable = "Hola mundo";
// 3.- Definier ruta principal
app.get('/',(req,res)=>{
    res.send(`!Servidor Express funcionando--ss!${mi_variable}`);
});

//Get
app.get('/productos',(req,res)=>{
 res.send('Lista de productos');
});

//4.- Iniciar servidor
app.listen(PORT, ()=>{
    console.log('Servidor corriendo');
});