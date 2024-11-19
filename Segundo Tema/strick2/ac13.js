"use strict"

/*
Dado un array de números, usa el método sort() para ordenarlos de menor a mayor y luego imprímelos
*/

let numeroA=Number(prompt("dame la longitud del array"));
let array=new Array();
let i=0;

while(i!=numeroA){
    let num=Number(prompt("dame un numero menos de 10"));
    array.push(num);
    i++;
}

array.sort(function(a,b){
    return a-b;
});
console.log(array);