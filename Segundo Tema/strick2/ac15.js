"use strict"

/*
Dado dos arrays de números, únelos en un solo array y luego ordénalo en orden ascendente. Imprime el array
resultante.
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
let num2=Number(prompt("dame la longitud del array"));
let array2= new Array ();
i=0;

while(num2!=i){
    let num=Number(prompt("dame un numero"));
    array2.push(num);
    i++;
}
console.log(array2);

let arrayF= array.concat(array2);

arrayF.sort(function(a,b){
    return a-b;
});
console.log(arrayF);