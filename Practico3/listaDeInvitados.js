let personas = [];
let admitidos = [];
let rechazados = [];
personas.push("Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia");

for (let i = 0; i < 8; i++) {
    if (personas[i] != "Jose" && personas[i] != "Sofia") {
        admitidos.push(personas[i]);
    }
    else {
        rechazados.push(personas[i]);
    }   
}

for (let i = -1; i < 6; i++) {
    if (i === -1) {
        console.log("La lista de invitados admitidos es:")
    }
    else {
        console.log(admitidos[i])
    }  
}

for (let i = -1; i < 2; i++) {
    if (i === -1) {
        console.log("La lista de invitados rechazados es:")
    }
    else {
        console.log(rechazados[i])
    }  
}

