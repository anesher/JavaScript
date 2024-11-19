"use script"

let nombre=prompt("cual es tu nombre");
let edad=prompt("cual es tu edad");
edad=Number(edad);
let email=prompt("cual es tu correo");
let alumno = {nombre:nombre, edad:edad, email:email};
 console.assert(alumno.edad>18, "Debe ser mayor de 18 años");