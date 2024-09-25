// Condicional Simple: Mayor o Menor Pide al usuario un número y verifica si es mayor o menor que 10. Muestra un mensaje indicando el resultado.
let readlineSync = require('readline-sync');

let numero = parseInt(readlineSync.question("Ingresa un numero: "));
 
if (numero > 10) {
  console.log("El numero es mayor que 10");
} else  (numero < 10) 
  console.log("El numero es menor que 10");



