let cita = "Tres tristes tigres comen trigo en un trigal";
let substring = "tigres comen trigo";

let tamañoDeCita = cita.length;
console.log("El tamaño de la cita es: "+ tamañoDeCita);

let indice = cita.indexOf("tigres comen trigo");
console.log("El indice del substring es:"+indice);

let substring_cita = cita.split(" ");
let citaRevisada = substring_cita[0]+" "+substring_cita[1]+" "+substring;
console.log(citaRevisada);