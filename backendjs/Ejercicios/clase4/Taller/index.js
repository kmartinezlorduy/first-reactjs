const fs = require('fs');

fs.readFile('./package.json', 'utf-8', (error, contenido) => {
    if (error) {
        throw new Error('Error al leer archivo');
    } else {
        //console.log(contenido);
        const info = {
            contenidoStr: contenido,
            contenidoObj: JSON.parse(contenido),
            size: '2Kb'
        }
        console.log(info);


        try {
            fs.writeFile('./info.txt', JSON.stringify(info, null, 2), error => {
                if (error) {
                    throw new Error('Error al leer archivo');
                } else {
                    console.log('todo ok');
                }
            });
        } catch (error) {
            throw new Error('Error al escribir archivo');
        }

    }
});