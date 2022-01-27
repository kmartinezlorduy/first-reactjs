const http = require('http');

const server = http.createServer((peticion, respuesta) => {
    let saludo = saludar();
    respuesta.end(saludo);

});

const connectedServer = server.listen(8080, () => {
    console.log(`Servidor escuchando en el puerto ${connectedServer.address().port}`)
});

function saludar() {
    let saludo;
    let fecha = new Date().toLocaleDateString();

    if (fecha > "06:00:00" && fecha < "13:00:00") {
        saludo = "Buenos dias Sr(a)";
    } else {
        if (fecha < "19:00:00") {
            saludo = "Buenas tardes Sr(a)";
        } else {
            saludo = "Buenas noches Sr(a)";
        }
    }
    return saludo;
}
