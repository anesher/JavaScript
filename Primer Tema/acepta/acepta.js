"use script"

let count = 0;

for (let i = 0; i < 20; i++) {
    let respuesta = prompt("¿Acepta las condiciones de la oferta? (sí/no)");
    count ++;
}

console.log("Número de aceptaciones: " + count);
