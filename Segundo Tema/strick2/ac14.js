"use strict"

/*
Dado un array de números, usa filter() y reduce() para sumar solo los números positivos en el array. Imprime
el resultado.
*/

let numA=Number(prompt("dame la longitud del array"));
let array= new Array ();
let i=0;
while(numA!=i){
    let num=Number(prompt("dame un numero"));
    array.push(num);
    i++;
}

let arrayM=array.filter(function(numero){
    return numero>0;
});

let arrayFinal=arraM.reduce(function(acumulador, numero){
    return acumulador+numero;
},0);
console.log(arrayFinal);