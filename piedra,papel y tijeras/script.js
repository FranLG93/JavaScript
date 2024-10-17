// Seleccion de elementos del DOM
const resultadoTexto = document.getElementById('mensaje');
const eleccionesTexto = document.getElementById('jugador-eleccion');
const computadoraEleccionTexto = document.getElementById('computadora-eleccion');
const piedraButton = document.getElementById('piedra');
const papelButton = document.getElementById('papel');
const tijerasButton = document.getElementById('tijeras');

// Opciones del juego
const opciones = ['✊', '✋', '✌'];
const opcionesMap = {
  piedra: '✊',
  papel: '✋',
  tijeras: '✌'
};

// Funcion para que la computadora elija una opcion aleatoria
function eleccionpc() {
  return opciones[Math.random() * opciones.length | 0];
}

// Funcion para determinar el resultado del juego
function determinarGanador(jugador, pc) {
  if (jugador === pc) {
    return 'Empate';
  } else if (
    (jugador === opcionesMap.piedra && pc === opcionesMap.tijeras) ||
    (jugador === opcionesMap.papel && pc === opcionesMap.piedra) ||
    (jugador === opcionesMap.tijeras && pc === opcionesMap.papel)
  ) {
    return 'Ganaste';
  } else {
    return 'Perdiste';
  }
}

// Funcion principal para jugar
function jugar(eleccionJugador) {
  console.log('Elegiste:', eleccionJugador);
  if (!opcionesMap[eleccionJugador]) {
    console.error(`Eso no se puede hacer: ${eleccionJugador}`);
    return;
  }

  const eleccionpcValor = eleccionpc();
  console.log('El pc eligio:', eleccionpcValor);
  const resultado = determinarGanador(opcionesMap[eleccionJugador], eleccionpcValor);
  console.log('Resultado:', resultado);

  resultadoTexto.textContent = `Resultado: ${resultado}`;
  eleccionesTexto.textContent = `Jugador: ${opcionesMap[eleccionJugador]}`;
  computadoraEleccionTexto.textContent = `Pc: ${eleccionpcValor}`;
}

// Asignar eventos a los botones
piedraButton.addEventListener('click', () => jugar('piedra'));
papelButton.addEventListener('click', () => jugar('papel'));
tijerasButton.addEventListener('click', () => jugar('tijeras'));