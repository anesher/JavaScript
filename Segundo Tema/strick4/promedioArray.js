"use strict"
//Crea una función tradicional llamada promedioArray que tome un array de números como parámetro y
//devuelva el promedio de esos números. Muestra el resultado usando console.log.
function promedioArray(array) {
    let suma = 0; // Inicializar acumulador
    for (let i = 0; i < array.length; i++) { // i < array.length para evitar desbordamiento
        suma += array[i]; // Sumar cada elemento
    }
    return suma / array.length; // Dividir la suma entre el número de elementos
}

let array = [2, 3, 2, 1, 2, 3, 2, 1, 2]; // Array de ejemplo
let final = promedioArray(array); // Llamar a la función correctamente
console.log(final); // Mostrar el promedio