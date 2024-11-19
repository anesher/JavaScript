"use strick"

/*
    Dado un array de palabras, usa map() para crear un nuevo array que contenga la longitud de cada palabra.
*/

let numeroA=Number(prompt("cuantas palabras quieres"));
let array=new Array();
let i=0;

while(numeroA!=i){
    let palabra=prompt("dame una palabra");
    array.push(palabra);
    i++;
}
console.log(array);

let longitud=array.map(function(palabra){
    return palabra.length;
});
console.log(longitud);
