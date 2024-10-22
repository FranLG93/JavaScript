// Variables principales
let palabraSecreta = "holamundo";  // Palabra a adivinar
let palabraMostrada = "_".repeat(palabraSecreta.length).split(''); 
let intentosRestantes = 6;  // Intentos

//  palabra mostrada
function mostrarPalabra() {
    document.getElementById("palabra").textContent = palabraMostrada.join(' ');
}

// adivinar la letra
function adivinar() {
    let letra = document.getElementById("letra").value.toLowerCase();
    document.getElementById("letra").value = "";  // Limpiar 
    document.getElementById("mensaje").textContent = "";  // Limpiar mensajes 

   
    if (letra.length !== 1 || !/^[a-z]$/.test(letra)) {
        document.getElementById("mensaje").textContent = "ingresa una palabra correcta.";
        return;
    }

    // Verificar si la letra secreta
    if (palabraSecreta.includes(letra)) {
        for (let i = 0; i < palabraSecreta.length; i++) {
            if (palabraSecreta[i] === letra) {
                palabraMostrada[i] = letra;
            }
        }
    } else {
        intentosRestantes--;  // intentos contador negativo
    }

    //ACTUALIZAR
    mostrarPalabra();
    document.getElementById("intentos").textContent = intentosRestantes;


    if (!palabraMostrada.includes("_")) {
        document.getElementById("mensaje").textContent = "¡Ganaste!";
        bloquearJuego();
    } else if (intentosRestantes === 0) {
        document.getElementById("mensaje").textContent = "Perdiste. La palabra era " + palabraSecreta;
        bloquearJuego();
    }
}


function bloquearJuego() {
    document.getElementById("letra").disabled = true;
    document.querySelector("button").disabled = true;
}


mostrarPalabra();
