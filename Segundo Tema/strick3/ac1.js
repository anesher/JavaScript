"use strict"

/*
Crea una función tradicional que reciba un array de números y devuelva un nuevo array que contenga sólo los
números positivos. Utiliza una estructura condicional if.
*/

let array = [2, 4, 5, 4, 5, 4, -6, 7, 7, 8];  
let arrayp = [];  

function positivo(array) {
    for (let i = 0; i < array.length; i++) {  
        if (array[i] >= 0) {  
            arrayp.push(array[i]);  
        }
    }
    return arrayp;  
}
console.log(positivo(array));  
