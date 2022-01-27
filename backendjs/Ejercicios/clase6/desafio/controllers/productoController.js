import { Contenedor } from '../class/Contenedor.js';
import { Producto } from '../class/Producto.js'


export const listarProductos = () => {
    let c = new Contenedor('FileContenedor.txt');
    let productos = c.getAll();
    return productos;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const productoRandom = () => {
    let c = new Contenedor('FileContenedor.txt');
    let productos = c.getAll();
    let index = getRandomInt(0, productos.length - 1);
    console.log(`index buscado ${index}`);
    let producto = c.getById(index);
    return producto;
}

//export default listarProductos;

