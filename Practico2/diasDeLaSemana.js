const readlineSync = require('readline-sync');
let numero = readlineSync.question("ingrese un numero del 1 al 7\n");

switch (Number(numero)) {
    case 1:
        console.log("Hoy es lunes");
        break;
    case 2:
        console.log("Hoy es lunes");
        break;
    case 3:
        console.log("Hoy es lunes");
        break;
    case 4:
        console.log("Hoy es lunes");
        break;
    case 5:
        console.log("Hoy es lunes");
        break;
    case 6:
        console.log("Hoy es lunes");
        break;
    case 7:
        console.log("Hoy es lunes");
        break;   
    default:
        console.log("Numero inválido");
}