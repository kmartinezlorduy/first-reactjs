import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { listarProductos, productoRandom } from './controllers/productoController.js';
const { pathname: root } = new URL('../src', import.meta.url)


const app = express();

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
});

server.on("error", error => console.log(`Error en el server ${error}`));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
})


app.get('/productos', (req, res) => {
    res.send(listarProductos());
});

app.get('/productoRandom', (req, res) => {
    res.send(productoRandom());
});

productoRandom
//Set-ExecutionPolicy -Scope CurrentUser unrestricted
