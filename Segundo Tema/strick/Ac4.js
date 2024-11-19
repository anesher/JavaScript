"use strick"

/*
Escribe un programa que compare dos números y muestre en la consola cuál es mayor, cuál es
menor, o si son iguales.
*/

let num1=Number(prompt("dame el primer numero"));
let num2= Number(prompt("dame el segundo numero"));

if(num1>num2){
    alert(`el numero 1 que es : ${num1} es mayor que el numero dos ${num2}`);
}else if(num1<num2){
    alert(`el numero 1 que es : ${num1} es menor que el numero dos ${num2}`)
}else{
    alert(`son iguales`);
}