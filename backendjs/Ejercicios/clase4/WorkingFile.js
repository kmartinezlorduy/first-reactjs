const fs = require('fs');

const date = new Date();

console.log(date.toLocaleDateString());


try {
    fs.writeFileSync('./fyh.txt', `Fecha: ${date.toLocaleDateString()} Hora: ${date.toLocaleTimeString()}`);
} catch (error) {
    console.log(error);
}

try {
    const data = fs.readFileSync('./fyh.txt', 'utf-8');
    console.log(data);
} catch (error) {
    console.log(error);
}