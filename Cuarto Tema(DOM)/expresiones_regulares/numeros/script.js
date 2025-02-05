/*
Extracción de números de un texto: Escribe una expresión regular para
extraer todos los números enteros de una cadena de texto.
*/
let frase = "que pasa 5 mi gente 19";
let regex = /\d+/g;

console.log(frase.match(regex));