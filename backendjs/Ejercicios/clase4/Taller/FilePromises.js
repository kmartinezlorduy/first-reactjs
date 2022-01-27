const fs = require('fs');

//Leer usando try catch
async function readFile() {
    try {
        const contenido = await fs.promises.readFile('./info.txt', 'utf-8');
        const infoData = JSON.parse(contenido.contenidoObj);
        const info = {
            contenidoStr: infoData.contenidoStr,
            contenidoObj: infoData.contenidoObj,
        }
        console.log(info);
    } catch (error) {
        console.log(error);

    }
}
readFile();

//Leer usando async await