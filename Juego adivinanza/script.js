// Generar el numero secreto aleatorio entre 1 y 100
let numerosecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

// Referencias a elementos de nuetro DOM
const entradanumero = document.getElementById('input');
const botoncomprobar = document.getElementById('button');
const retroalimentacion = document.getElementById('retro');
const mostrarintentos = document.getElementById('attempts');

// Funcion para comprobar el intento del usuario
function comprobarintento() {
    const numerousuario = Number(entradanumero.value);  // Convertir a numero
    intentos++;  // Incrementar el conteo de intentos
    mostrarintentos.textContent = `intentos: ${intentos}`;

    // Verificar si el numero ingresado es correcto
    if (numerousuario === numerosecreto) {
        retroalimentacion.textContent = 'Vamoos! Lo adivinaste pendejo';
        retroalimentacion.className = 'retro correcto';
    } else if (numerousuario > numerosecreto) {
        retroalimentacion.textContent = 'Demasiado alto';
        retroalimentacion.className = 'retro alto';
    } else if (numerousuario < numerosecreto) {
        retroalimentacion.textContent = 'Demasiado bajo';
        retroalimentacion.className = 'retro bajo';
    }

    // Limpiar el campo de entrada despues de cada intento
    entradanumero.value = '';
    entradanumero.focus();
}


botoncomprobar.addEventListener('click', comprobarintento);
