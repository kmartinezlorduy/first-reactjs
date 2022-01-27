import { Contenedor } from './Contenedor.js';
import { Producto } from './Producto.js';

//Paso 1: Crear objeto
let c = new Contenedor('FileContenedor.txt');
let p1 = new Producto(0, 'Escuadra', 2300, 'https://media.istockphoto.com/photos/hires-wooden-ruler-with-clipping-path-on-white-background-picture-id118232303?k=20&m=118232303&s=612x612&w=0&h=IQi23XgNWe7FCaKi5VlodPNdbtPAGszJNs6EHjU6UKM=')
c.saveFile(p1);



//Paso 2: Agregar objeto
//let p2 = new Producto(0, 'Cuaderno', 3000, 'https://www.20milproductos.com/blog/wp-content/uploads/2017/07/oie_V5j9tD2023Ut.jpg')
///c.saveFile(p2);

//Paso 3: Obtener todos los objetos
//let productos = c.getAll();
//console.log(`Existen ${productos.length} registrados.`);

//Paso 4: Obtener un producto por ID
//let productoBuscado = c.getById(1);
//console.log(`Producto encontrado: ${productoBuscado.title} `)

//Paso 5: Eliminar objeto por ID
//c.deleteById(0);

//Paso 6: Mostrar todos
//let productos = c.getAll();
//console.log(`Existen ${productos.length} registrados.`);

//Paso 7: Eliminar todos
//c.deleteAll();

//console.log(data);
//let strData = `[${data.toString().replace(/}/g, '},')}]`
//let jsonData = JSON.parse(strData.replace(',]', ']'));
//console.log(data.length);

