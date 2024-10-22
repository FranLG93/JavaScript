// Variables principales
let palabraSecreta = "holamundo";  // Palabra a adivinar
let palabraMostrada = "_".repeat(palabraSecreta.length).split('');  // Estado de la palabra (guiones bajos)
let intentosRestantes = 6;  // Intentos disponibles

// Función para actualizar la palabra mostrada
function mostrarPalabra() {
    document.getElementById("palabra").textContent = palabraMostrada.join(' ');
}

// Función principal para adivinar la letra
function adivinar() {
    let letra = document.getElementById("letra").value.toLowerCase();
    document.getElementById("letra").value = "";  // Limpiar campo de entrada
    document.getElementById("mensaje").textContent = "";  // Limpiar mensajes previos

    // Verificar si es una letra válida
    if (letra.length !== 1 || !/^[a-z]$/.test(letra)) {
        document.getElementById("mensaje").textContent = "Por favor, ingresa una letra válida.";
        return;
    }

    // Verificar si la letra está en la palabra secreta
    if (palabraSecreta.includes(letra)) {
        for (let i = 0; i < palabraSecreta.length; i++) {
            if (palabraSecreta[i] === letra) {
                palabraMostrada[i] = letra;
            }
        }
    } else {
        intentosRestantes--;  // Reducir intentos si la letra no está
    }

    // Actualizar la interfaz
    mostrarPalabra();
    document.getElementById("intentos").textContent = intentosRestantes;

    // Verificar si el jugador ganó o perdió
    if (!palabraMostrada.includes("_")) {
        document.getElementById("mensaje").textContent = "¡Ganaste!";
        bloquearJuego();
    } else if (intentosRestantes === 0) {
        document.getElementById("mensaje").textContent = "Perdiste. La palabra era " + palabraSecreta;
        bloquearJuego();
    }
}

// Función para bloquear el juego
function bloquearJuego() {
    document.getElementById("letra").disabled = true;
    document.querySelector("button").disabled = true;
}

// Inicializar el juego
mostrarPalabra();
