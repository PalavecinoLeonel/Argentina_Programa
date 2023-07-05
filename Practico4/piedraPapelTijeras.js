function obtenerJugadaComputadora() {
    let jugadaComputadora = Math.floor(Math.random()*3);
    switch (jugadaComputadora) {
        case 0:
            jugadaComputadora = ("piedra");
            break;
        case 1:
            jugadaComputadora = ("papel");
            break;
        case 2:
            jugadaComputadora = ("tijeras");
            break;
    }
    return jugadaComputadora;
}

function obtenerJugadaUsuario() {
    const readlineSync = require('readline-sync');
    let jugadaUsuario = readlineSync.question("ingrese piedra, papel o tijeras\n");
    return jugadaUsuario;
}

function determinarGanador(jugadaComputadora, jugadaUsuario) {
    let Resultado = "";
    if (jugadaComputadora == "piedra" && jugadaUsuario == "tijeras" || 
        jugadaComputadora == "papel" && jugadaUsuario == "piedra" ||
        jugadaComputadora == "tijeras" && jugadaUsuario == "papel") {
        Resultado = ("Gana la computadora");
    }
    else {
        if (jugadaComputadora == "piedra" && jugadaUsuario == "papel" || 
        jugadaComputadora == "papel" && jugadaUsuario == "tijera" ||
        jugadaComputadora == "tijeras" && jugadaUsuario == "piedra") {
            Resultado = ("¡¡Usted Gana!!");
        }
        else {
            Resultado = ("Empate");
        }
    }
    return Resultado;
}

let jugadaComputadora = obtenerJugadaComputadora();
let jugadaUsuario = obtenerJugadaUsuario();
let Resultado = determinarGanador(jugadaComputadora, jugadaUsuario);
console.log("La computadora eligió: " +jugadaComputadora+". El usuario eligió: "+jugadaUsuario);
console.log("El resultado fue: "+Resultado);
