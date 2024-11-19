"use strick"

/*
Dado un array de números, usa every() para verificar si todos los números en el array son pares. Imprime
true si todos son pares, de lo contrario imprime false. la función every es un método de los arrays que
verifica si todos los elementos de un array cumlen con una determinada condición especificada en 
la función
*/

let numA=Number(prompt("dame la longitud del array"));
let array= new Array ();
let i=0;
while(numA!=i){
    let num=Number(prompt("dame un numero"));
    array.push(num);
    i++;
}
//En este caso, num => num % 2 === 0 es una función de flecha que verifica si cada elemento del array es divisible por 2 (es decir, si es par).
console.log(array.every(num=>num%2==0));