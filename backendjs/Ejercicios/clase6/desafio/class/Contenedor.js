import fs from 'fs'
import { Producto } from './Producto.js';

//const { readFile } = require('fs/promises');

export class Contenedor {

    constructor(name) {
        this.name = name;
    }

    /* saveFile = async (totales) => {
        const datos = JSON.stringify(totales)
        await writeFile(this.name, datos)
        console.log(
            `Los totales acumulados de seguros quedaron guardados en ${archivoOut}.`
        )
    } */



    saveFile = (p) => {
        let products = this.getAll();
        let id = products.length;
        p.id = id;
        return new Promise((resolve, reject) => {
            products.push(p);

            fs.writeFile(this.name, JSON.stringify(products), writeFileError => {
                if (writeFileError) {
                    reject(writeFileError);
                    return;
                }

                resolve(this.name);
                console.log(`Producto agregado con Id ${id}`);
            });
        });

    }

    appendFile = (p) => {
        let products = this.getAll();
        let id = products.length;
        p.id = id;

    }


    readFile = () => {
        return new Promise((resolve, reject) => {
            fs.readFile(this.name, 'utf8', (error, fileContent) => {
                if (error != null) {
                    reject(error);
                    return;
                }

                resolve(fileContent);
            });
        });
    }

    getAll = () => {
        try {
            const data = fs.readFileSync(this.name, 'utf-8');
            //console.log(`Data ${data}`);
            let products = new Array();
            if (data.toString().length > 0) {
                //let strData = `[${data.toString().replace(/}/g, '},')}]`
                //let jsonData = JSON.parse(strData.replace(',]', ']'));                
                let jsonData = JSON.parse(data.toString());
                for (var product of jsonData) {
                    products.push(new Producto(product.id, product.title, product.price, product.image));
                }
            }

            return products;
        } catch (error) {
            console.log(error);
        }
    }


    getById = (id) => {
        try {
            let products = this.getAll();
            let productoEncontrado = products.find(
                (a) => a.id == id
            );
            return productoEncontrado;
        } catch (error) {
            console.log(error);
        }
    }




    deleteAll = () => {
        return new Promise((resolve, reject) => {
            fs.writeFile(this.name, '', writeFileError => {
                if (writeFileError) {
                    reject(writeFileError);
                    return;
                }

                resolve(this.name);
            });
        });
    }

    deleteById = (id) => {
        let products = this.getAll();

        let productsNew = new Array();
        for (var product of products) {
            if (product.id != id) {
                productsNew.push(product);
            }
        }
        this.deleteAll();

        return new Promise((resolve, reject) => {
            fs.writeFile(this.name, JSON.stringify(productsNew), writeFileError => {
                if (writeFileError) {
                    reject(writeFileError);
                    return;
                }

                resolve(this.name);
            });
        });
    }



}