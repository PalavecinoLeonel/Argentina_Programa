const readlineSync = require('readline-sync');
let numeroUsuario = readlineSync.question("ingrese un numero\n");

if (numeroUsuario > 0) {
    console.log("El numero es positivo")
}
else {
    if (numeroUsuario == 0) {
        console.log("El numero es cero")
    }
    else {
        console.log("El numero es negativo")
    }
}
