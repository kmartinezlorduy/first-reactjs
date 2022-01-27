import express from 'express';
import path from 'path';
import Prueba from './controllers/ejemploController.js';

const app = express();

const PORT = 8080;
let visitas = 0;

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
});

server.on("error", error => console.log(`Error en el server ${error}`));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
})

app.get('/visitas', (req, res) => {
    visitas++;
    res.send(`La cantidad de visitas es: ${visitas}`)
});

app.get('/fyh', (req, res) => {
    let fecha = {};
    fecha.fyh = new Date().toLocaleString();
    res.send(fecha);
});

app.get('/ejemplo', (req, res) => {

    res.send(Prueba('Samir'));
});
//Set-ExecutionPolicy -Scope CurrentUser unrestricted
