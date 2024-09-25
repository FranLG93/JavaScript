//Contar Vocales en una Cadena Solicita al usuario una cadena de texto y cuenta cuántas vocales tiene. Imprime el resultado en la consola.

let readlineSync = require('readline-sync');
let cadena = readlineSync.question("Ingresa una cadena de texto: ");
let vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
let resultado = 0;

for (let i = 0; 1 <= cadena.length; i++) {
    if (vocales.includes(cadena[i])) {
        resultado++;
    }
}
 console.log("La cadena tiene " + vocales.length + " vocales");
