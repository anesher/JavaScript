"use strick"

/*
Crea un programa que calcule el precio final de un producto después de aplicar un descuento. Usa
prompt para pedir al usuario el precio original y el porcentaje de descuento. Calcula el precio final y
muestra todos dos datos por consola
*/

var precio= Number(prompt("dame el precio final"));
var descuento=Number(prompt("dame el porcentaje de descuento"));

var precioFinal=Number(((descuento/100)*precio)+precio);

console.log(`tu descuento era : ${descuento} % y el precio del producro ${precio}, por lo tanto el producto se te queda en ${precioFinal}`);