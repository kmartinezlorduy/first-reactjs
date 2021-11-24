import { Book } from '../class/book.js';

export class Usuario {

    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }


    addMascota(mascotaName) {
        this.mascotas.push(mascotaName);
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(name, author) {
        this.libros.push(new Book(name, author));
    }

    getBookNames() {
        let booksNames = new Array();
        for (var libro of this.libros) {
            booksNames.push(libro.name);
        }
        // for (let i = 0; i < this.libros.length; i++) {
        //     booksNames.push(this.libros[i].name);
        //     console.log(`Libro: ${this.libros[i].name}`);
        // }

        booksNames.forEach(function (entry) {
            console.log(`Libro: ${entry}`);
        });
        return booksNames;
    }

}
