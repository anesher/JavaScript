"use strick"

let nombre=prompt("cual es tu nombre");
let edad=prompt("cual es tu edad")
edad=Number(edad);
let correo=prompt("cual es tu correro")
let usuarios = [
    {nombre},
    {edad},
    {correo}
]
console.table(usuarios);