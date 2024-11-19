"use script"
// se utiliza para pedir primer el peso y despues la altura
let peso = Number(prompt("introduce tu peso"));
let altura =Number(prompt("introduce tu altura"));
// se documenta con el console.info para que salfa en la terminal
console.info(" tu altura es de : " +altura);
console.info("tu peso es de : " +peso);
// se realiza la operacion para saber su masa coporal
let IMC =Number((altura*altura)/peso);
// se utiliza el alert para mostrar el resultado
alert (" tu porcentaje de masa corporal es de :  " + IMC);