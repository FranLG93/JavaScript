// Generar el número secreto aleatorio entre 1 y 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

// Referencias a elementos del DOM
const entradaNumero = document.getElementById('input');
const botonComprobar = document.getElementById('button');
const retroalimentacion = document.getElementById('feedback');
const mostrarIntentos = document.getElementById('attempts');

// Función que maneja el intento del usuario
function comprobarIntento() {
    const numeroUsuario = Number(entradaNumero.value);  // Convertir a número
    intentos++;  // Incrementar el conteo de intentos
    mostrarIntentos.textContent = `Intentos: ${intentos}`;

    // Verificar si el número ingresado es correcto
    if (numeroUsuario === numeroSecreto) {
        retroalimentacion.textContent = '¡Correcto! Has adivinado el número.';
        retroalimentacion.className = 'feedback success';
    } else if (numeroUsuario > numeroSecreto) {
        retroalimentacion.textContent = 'Demasiado alto. Intenta nuevamente.';
        retroalimentacion.className = 'feedback too-high';
    } else if (numeroUsuario < numeroSecreto) {
        retroalimentacion.textContent = 'Demasiado bajo. Intenta nuevamente.';
        retroalimentacion.className = 'feedback too-low';
    }

    // Limpiar el campo de entrada después de cada intento
    entradaNumero.value = '';
    entradaNumero.focus();
}

// Agregar el evento de clic al botón
botonComprobar.addEventListener('click', comprobarIntento);
