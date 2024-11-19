"use strick"

/*
 Dado un array de números, usa el método filter() para crear un nuevo array que contenga solo los números
    pares
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

let arrayPares=array.filter(function(numero){
    return numero%2===0
});

console.log(arrayPares);