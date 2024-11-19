"use strick"

/*
Dado un array de números y un valor x, multiplica cada número en el array por x y almacena los resultados en
un nuevo array
*/

let numeroA=Number(prompt("de cuantos quieres el array"));
let multi=Number(prompt("de cuanto quieres multiplicar el array"));
let array= new Array ();
let i=0;

while(i!=numeroA){
    let num=Number(prompt("dame un numero"));
    array.push(num);
    i++;
}
console.log(array);

let arrayFinal= array.map(function(numero){
    return numero*multi;
});
console.log(arrayFinal);