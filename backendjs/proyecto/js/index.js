import { Usuario } from '../class/usuario.js';
import { Book } from '../class/book.js';

let usuario1 = new Usuario('Gael de Jesus', 'Cabrera Lorduy', new Array(), new Array());

usuario1.addMascota('Pulgas');
usuario1.addMascota('Lulu');
usuario1.addMascota('Lazy');

usuario1.addBook('Los hermanos Karamazov', 'Fiódor Dostoievski');
usuario1.addBook('El hombre invisible', 'Ralph Ellison');
usuario1.addBook('Cien años de soledad', 'Gabriel García Márquez Nobel');
usuario1.addBook('Casa de muñecas', 'Henrik Ibsen');

console.log(`Nombre de usuario ${usuario1.getFullName()}`);
console.log(`Numero de mascotas ${usuario1.countMascotas()}`);
console.log(`Libros leidos ${usuario1.libros.length}`);
usuario1.getBookNames();

