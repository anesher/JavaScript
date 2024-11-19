"use strict"

/*
Dado un array de números, usa un ciclo para encontrar tanto el valor mínimo como el máximo en el array.
Imprime ambos valores.
*/

let numeroA=Number(prompt("dame la longitud del array"));
let array=new Array();
let i=0;

while(i!=numeroA){
    let num=Number(prompt("dame un numero menos de 10"));
    array.push(num);
    i++;
}
console.log(array);
// ascendente en numeros
array.sort(function(a,b){
    return a-b;
});
console.log(array);

console.log(array(0));
console.log(array(numeroA-1));

/*
descente
array.sort(function(a,b){
    return b-a;
});
*/