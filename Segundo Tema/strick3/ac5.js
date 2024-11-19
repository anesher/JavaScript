"use strict"

/*
Crea una función tradicional que reciba un array de arrays (una matriz) y devuelva la suma de todos los
elementos utilizando un bucle for anidado matriz: [[1, 2], [3, 4], [5, 6]]
*/

function matriz (array){
    let acumulador=0;
    for(let f=0;array.length>f;f++){
        for(let c=0; array[f].length>c;c++){
          acumulador += array[f][c];
        }
      }
    return acumulador;
};

let array=[[1,2],[3,4],[5,6]];
console.log(array);
let final= matriz(array);
console.log(final);