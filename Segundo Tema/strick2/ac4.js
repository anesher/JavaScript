"use strick"

/* Escribe un programa que calcule la suma de los primeros n números naturales,
 donde n es un número dado
*/

let numeroA=Number(prompt("¿Cuantos numeros quieres en el array"));
let array=new Array();
let i=0;

while(i!=numeroA){
    let num=Number(prompt("dame un numero"));
    array.push(num);
    i++;
}
console.log(array);

let sumaTotal=array.reduce(function (acumulador, numero){
    return acumulador+numero;
}, 0); 

console.log(sumaTotal);