"use script"

let ayo=prompt("cual es tu año de nacimiento")
ayo=Number(ayo);
let ayoActual=new Date().getFullYear();
ayoActual=Number(ayoActual);
console.info("año actual:",ayoActual);
let edad= ayoActual-ayo;
edad=Number(edad);
console.log("ahora mismo tienes",edad);
let edadFutura=((2050-ayoActual)+edad);
edadFutura=Number(edadFutura);
alert(edadFutura);