"use strict"

function cifradoCesar(frase, clave){ 
    // Variable para almacenar la letra cifrada y la respuesta final
    let letra, respuesta = '';
    // Definimos el alfabeto en minúsculas
    let alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    // Rotamos el alfabeto [clave] lugares a la derecha
    // Tomamos los últimos [clave] caracteres del alfabeto y los ponemos al inicio
    let cifrado = alfabeto.slice(-clave);
    cifrado += alfabeto.slice(0, alfabeto.length - clave);
    // Recorremos cada letra de la frase
    for (let i = 0; i < frase.length; i++) {
        letra = frase[i].toLowerCase(); // Convertimos la letra a minúscula para buscarla en el alfabeto
        if (letra === ' ') {
            // Si es un espacio, lo dejamos tal cual en la respuesta
            respuesta += ' ';
        } else {
            // Buscamos la letra en el alfabeto
            let indice = alfabeto.indexOf(letra);
            if (indice !== -1) {
                // Si la letra está en el alfabeto, la ciframos usando la clave
                letra = cifrado[indice];
                // Verificamos si la letra original era mayúscula
                // Si era mayúscula, convertimos la letra cifrada también a mayúscula
                if (frase[i] === frase[i].toUpperCase()) {
                    letra = letra.toUpperCase();
                }
            }
            // Agregamos la letra cifrada (o espacio) a la respuesta final
            respuesta += letra;
        }
    }
    // Devolvemos la respuesta cifrada
    return respuesta;
}
// Pedimos la frase al usuario
let frase = prompt("Dame una frase que quieras cifrar");
// Pedimos la clave al usuario y la convertimos a número
let clave = parseInt(prompt("Dame una clave para cifrarlo"), 10);
// Llamamos a la función de cifrado y obtenemos el resultado
let respuesta = cifradoCesar(frase, clave);
// Mostramos el resultado con un alert
alert(respuesta);
