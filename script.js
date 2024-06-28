let intentos = 6;


const button = document.getElementById("guess-button");

button.addEventListener("click", intentar);
function intentar(){
    const INTENTO = leerIntento();
    if (INTENTO === palabra ) {
        console.log("ganaste")
    
    }
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#79b851';
        } else if( palabra.includes(INTENTO[i]) ) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#f3c237';
        } else {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#a4aec4';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
		intentos--
        if (intentos==0){
            console.log("perdiste")
        }
}

function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;
}

let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH']
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];



