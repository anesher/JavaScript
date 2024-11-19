"use strick"

/*
Dado un array de números, escribe un programa que calcule la suma de todos los valores en el array
*/

let numA=Number(prompt("dame la longitud del array"));
let array= new Array ();
let i=0;
while(numA!=i){
    let num=Number(prompt("dame un numero"));
    array.push(num);
    i++;
}
console.log(array);

let arrayFinal=array.reduce(function(acumulador, num){
    return acumulador+num;
}, 0);

console.log (arrayFinal);