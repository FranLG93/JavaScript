//Determinar Par o Impar Escribe un programa que pida un número al usuario y determine si es par o impar usando un condicional if-else.

let readlineSync = require('readline-sync');
let num = readlineSync.questionInt("Ingresa un numero: ");
if (parseIntnum %2==0) {
    console.log("El numero es par");    
    
} else {
    console.log("El numero es impar");
}