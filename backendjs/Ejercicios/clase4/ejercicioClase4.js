
const mostrarLetras = (palabra, intervalo) => {
    for (let index = 0; index < palabra.length; index++) {
        setTimeout(() => console.log(palabra.charAt(index)), intervalo)
    }

}

mostrarLetras('Samir', 5000);

console.log('palabra.charAt(index)');