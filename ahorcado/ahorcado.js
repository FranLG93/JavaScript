// Variables principales
let palabraSecreta = "holamundo";  // Palabra a adivinar
let palabraMostrada = "_".repeat(palabraSecreta.length).split('');  // Estado de la palabra (guiones bajos)
let intentosRestantes = 6;  // Intentos disponibles
let ctx = document.getElementById("canvasAhorcado").getContext("2d");  // Contexto del lienzo para el muñeco

// Función para actualizar la palabra mostrada
function mostrarPalabra() {
    document.getElementById("palabra").textContent = palabraMostrada.join(' ');
}

// Dibujar el muñeco basado en intentos restantes
function dibujarAhorcado(intentos) {
    switch(intentos) {
        case 5:
            // Dibuja la base del ahorcado
            ctx.moveTo(10, 190);
            ctx.lineTo(100, 190);
            ctx.stroke();
            break;
        case 4:
            // Dibuja el poste vertical
            ctx.moveTo(40, 190);
            ctx.lineTo(40, 50);
            ctx.stroke();
            break;
        case 3:
            // Dibuja el brazo superior
            ctx.moveTo(40, 50);
            ctx.lineTo(120, 50);
            ctx.stroke();
            break;
        case 2:
            // Dibuja la cuerda
            ctx.moveTo(120, 50);
            ctx.lineTo(120, 80);
            ctx.stroke();
            break;
        case 1:
            // Dibuja la cabeza
            ctx.beginPath();
            ctx.arc(120, 100, 20, 0, Math.PI * 2, true);
            ctx.stroke();
            break;
        case 0:
            // Dibuja el cuerpo, brazos y piernas
            ctx.moveTo(120, 120);
            ctx.lineTo(120, 160);
            ctx.stroke();

            // Brazo izquierdo
            ctx.moveTo(120, 130);
            ctx.lineTo(100, 140);
            ctx.stroke();

            // Brazo derecho
            ctx.moveTo(120, 130);
            ctx.lineTo(140, 140);
            ctx.stroke();

            // Pierna izquierda
            ctx.moveTo(120, 160);
            ctx.lineTo(100, 180);
            ctx.stroke();

            // Pierna derecha
            ctx.moveTo(120, 160);
            ctx.lineTo(140, 180);
            ctx.stroke();
            break;
    }
}

// Función principal para adivinar la letra
function adivinar() {
    let letra = document.getElementById("letra").value.toLowerCase();
    document.getElementById("letra").value = "";  // Limpiar campo de entrada
    document.getElementById("mensaje").textContent = "";  // Limpiar mensajes 

    // Verificar si es una letra válida
    if (letra.length !== 1 || !/^[a-z]$/.test(letra)) {
        document.getElementById("mensaje").textContent = "ingresa una palabra correcta.";
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
        dibujarAhorcado(intentosRestantes);  // Dibuja una parte del muñeco
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
