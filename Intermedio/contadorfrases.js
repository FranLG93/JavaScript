//Contador de Palabras Solicita una frase al usuario y cuenta cuántas palabras tiene. Usa split() para separar las palabras y cuenta la longitud del array resultante.

let readlineSync = require('readline-sync');
let frase = readlineSync.question("Ingresa una frase: ");
let palabras = frase.split(" ");
console.log(palabras.length);
