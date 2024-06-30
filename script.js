let intentos = 5;
let juegoTerminado = false;

const button = document.getElementById("guess-button");

button.addEventListener("click", intentar);

function intentar() {
    if (juegoTerminado) {
        return;
    }

    const INTENTO = leerIntento();
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i in palabra) {
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i] === palabra[i]) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#79b851';
        } else if (palabra.includes(INTENTO[i])) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#f3c237';
        } else {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#a4aec4';
        }
        ROW.appendChild(SPAN);
    }
    GRID.appendChild(ROW);

    if (INTENTO === palabra) {
        mostrarMensaje("¡Ganaste! 😁", "ganaste");
        juegoTerminado = true;
        return;
    }

    intentos--;
    if (intentos === 0) {
        mostrarMensaje("Perdiste. La palabra era: " + palabra, "perdiste");
        juegoTerminado = true;
    }
}

function leerIntento() {
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase();
    return intento;
}

function mostrarMensaje(mensaje, clase) {
    const mensajeDiv = document.createElement('div');
    mensajeDiv.className = 'mensaje ' + clase;
    mensajeDiv.innerHTML = mensaje;
    document.body.appendChild(mensajeDiv);
}

let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH'];
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];

