"use script"

// se pide al usuario que introduzca primero la factura y despues la propina, para ellos se debe poner dos variables let y depues transformarlos en numeros con Number
let factura= Number(prompt("introduce el total de la factura"));
let propina=Number(prompt("introduce que porcentaje quieres dejar de propina"));

// se utiliza el console.log para poder visualizar en la terminal cuanto es la factura y la propina
console.log("la factura es : " +factura+ "y el porcenataje de propina es " + propina + "%")

// se utiliza dos operaciones con un console.log en medio para registrarlas 
let resultadopro= Number((propina*100)/factura);
console.log("el porcentaje de propina asciende :" +resultadopro);
let resultado=Number(resultadopro+factura);

// y por ultimo se utiliza el alert para visualizar el resultado
alert("Lo que debes pagar al final son "+  resultado);