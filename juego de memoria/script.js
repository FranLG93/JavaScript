const cartas = [
    'A', 'A', '2', '2', '3', '3', '4', '4'
];

let primeraCarta = null;
let segundaCarta = null;
let tableroBloqueado = false;
let cartasEmparejadas = 0;

function mezclar(array) {
    array.sort(() => Math.random() - 0.5);
}

function crearTablero() {
    mezclar(cartas);
    const tableroJuego = document.getElementById('tablero');
    tableroJuego.innerHTML = '';
    cartas.forEach(valorCarta => {
        const carta = document.createElement('div');
        carta.classList.add('carta');
        carta.setAttribute('data-card-value', valorCarta);
        carta.addEventListener('click', voltearCarta);
        tableroJuego.appendChild(carta);
    });
    document.getElementById('estado').textContent = '';
}

function voltearCarta() {
    if (tableroBloqueado || this === primeraCarta) return;

    this.classList.add('volteada'); // Aquí se aplica la clase de voltear
    this.textContent = this.getAttribute('data-card-value');

    if (!primeraCarta) {
        primeraCarta = this;
        return;
    }

    segundaCarta = this;
    tableroBloqueado = true;

    verificarEmparejamiento();
}

function verificarEmparejamiento() {
    const esEmparejamiento = primeraCarta.getAttribute('data-card-value') === segundaCarta.getAttribute('data-card-value');
    esEmparejamiento ? desactivarCartas() : devolverCartas();
}

function desactivarCartas() {
    cartasEmparejadas += 2;
    reiniciarTablero();
    if (cartasEmparejadas === cartas.length) {
        document.getElementById('estado').textContent = '¡Has ganado!';
    }
}

function devolverCartas() {
    setTimeout(() => {
        primeraCarta.classList.remove('volteada');
        segundaCarta.classList.remove('volteada');
        primeraCarta.textContent = '';
        segundaCarta.textContent = '';
        reiniciarTablero();
    }, 1000);
}

function reiniciarTablero() {
    [primeraCarta, segundaCarta, tableroBloqueado] = [null, null, false];
}

document.getElementById('resetButton').addEventListener('click', () => {
    cartasEmparejadas = 0;
    crearTablero();
});

crearTablero(); // Inicializar el tablero al cargar la página
