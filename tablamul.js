//Tabla de Multiplicar Pide al usuario un número y muestra su tabla de multiplicar del 1 al 10 usando un bucle for.
let readlineSync = require('readline-sync');

let num = readlineSync.questionInt("Ingresa un numero: ");
    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + num * i);
}

