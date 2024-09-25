//Calcular Factorial Escribe un programa que pida un número al usuario y calcule su factorial utilizando un bucle while.

let readlineSync = require('readline-sync');
let num = readlineSync.questionInt("Ingresa un numero: ");
let resultado = 1;
let i = 1;
while (i<= num ) {
    resultado = num* resultado;
    i++;
}
console.log("El factorial es: " + resultado)