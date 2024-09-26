//Calculadora Básica Crea un programa que pida dos números y un operador (+, -, *, /) al usuario. Realiza la operación y muestra el resultado en la consola.

let readlineSync = require('readline-sync');
let num1 = readlineSync.questionInt("Ingresa el primer numero: ");
let num2 = readlineSync.questionInt("Ingresa el segundo numero: ");
let oper = readlineSync.question("Que quieres hacer? (+, -, *, /): ");
let resultado = 0;
    

if (oper == "+"){
    resultado = num1 + num2;
} else if (oper == "-"){
    resultado = num1-num2;
} else if (oper == "*"){
    resultado = num1*num2;
} else if (oper == "/"){   
    resultado = num1/num2;
} else {
    console.log("Eso no puedes hacerlo");
} 


console.log( "El resultado es " + resultado);
