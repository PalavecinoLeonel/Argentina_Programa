const readlineSync = require('readline-sync');
let nombrePerro = readlineSync.question("como se llama tu perro?\n");

console.log(typeof(nombrePerro));
console.log(nombrePerro.length);