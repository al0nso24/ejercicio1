//Trae el framework
const express = require('express');
//Crea la app
const app = express();
const puerto = 3000;

app.use(express.json());
//Entrega los archivos del cliente desde el mismo servidor
app.use(express.static('public'));

const cursos = [
    { id: 1, nombre: 'Desarrollo Full Stack', creditos: 4 },
    { id: 2, nombre: 'Base de Datos', creditos: 3 },
    { id: 3, nombre: 'Redes y Comunicaciones', creditos: 3 }
]

//Obtiene el nombre de los cursos
app.get('/api/cursos', (req, res)=>{
    console.log("Petición recibida: GET/api/cursos");
    res.json(cursos)
})

//LLamando al puerto
app.listen(puerto, () => {
    console.log(`Puerto corriendo: http://localhost:${puerto}`);
})