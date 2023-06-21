const readlineSync = require('readline-sync');
let edadUsuario = readlineSync.question("cual es tu edad?\n");

if (edadUsuario > 18) {
    console.log("Eres mayor de edad");
}
else {
    console.log("Eres menor de edad");
}

