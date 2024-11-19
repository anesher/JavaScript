"use strick"

/*
    Escribe un programa que tome dos números y determine cuál es el mayor. Imprime el resultado
*/
let numero=Number(prompt("dame un numero"));
let numero2=Number(prompt("dame otro numero"));

if(numero>numero2){
    console.log("el numero 1 es mayor");
}else if(numero<numero2){
    console.log("el numero 2 es mayor");
}else{
    console.log("es igual");
}