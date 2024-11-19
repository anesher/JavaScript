"use strick"

/*
Dado un número almacenado en una variable, escribe un programa que clasifique el número en una de las
siguientes categorías: " menor que 10" , " entre 10 y 20" , " mayor que 20".
*/

let numero=Number(prompt("dame un numero"));

if(numero<10 && numero===10){
    console.log("menor de 10");
}else if(numero<20){
    console.log("entre 10 y 20");
}else{
    console.log("mayor que 20")
}