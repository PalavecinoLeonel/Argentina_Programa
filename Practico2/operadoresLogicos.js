const readlineSync = require('readline-sync');
let numero = readlineSync.question("ingrese un numero entero\n");

if (numero > 0 && numero % 2 == 0) {
    console.log("El numero es positivo y par")
}
else {
    if (numero > 0 && numero % 2 != 0) {
        console.log("El numero es positivo y impar")
    }
    else {
        if (numero < 0)
            console.log("El numero es negativo")
        else {
            console.log("El numero es cero")
        }
    }
}