//Contar Vocales en una Cadena Solicita al usuario una cadena de texto y cuenta cuántas vocales tiene. Imprime el resultado en la consola.

let readlineSync = require('readline-sync');
let cadena = readlineSync.question("Ingresa un texto: ");
let vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
let resultado = 0;
console.log(cadena);

for (let i = 0; i <= cadena.length; i++) {
    if (vocales.includes(cadena[i])) {
        resultado++;
    }
}
console.log("La cadena tiene " + resultado + " vocales");


