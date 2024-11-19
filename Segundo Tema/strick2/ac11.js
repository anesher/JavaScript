"use strict"

/*
Dado un array de números, escribe un programa que cuente cuántas veces aparece un número específico en
el array
*/

let numeroA=Number(prompt("dame la longitud del array"));
let array=new Array();
let i=0;

while(i!=numeroA){
    let num=Number(prompt("dame un numero"));
    array.push(num);
    i++;
}
console.log(array);

let numerop=Number(prompt("dame que numero quieres pedir"));
let arrayFinal=array.filter(function(numero){
        return numero===numerop;
} );
console.log(arrayFinal.length);




/*let numerop=Number(prompt("dame que numero quieres pedir"));
let arrayFinal=array.reduce(function(acumulador, numero){
    if(numero==numerop){
         acumulador++;
    } else{
     acumulador;
    }
     return acumlador;
},0 );
console.log(acumulador);*/