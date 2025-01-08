/*
Crea un programa que pida ciertos datos a un usuario y devuelve una tarjeta de presentación del
usuario en una ventana emergente.
*/
"use strict"

var nombre=prompt("Cual es tu nombre");
var apellido=prompt("Cual es tu apellido");
var edad=prompt("Cual es tu edad");
var color =prompt("ponme tu color favorito");

function personal(){
    var pestaya=window.open(color);
    pestaya.document.write("<h3 style='color: " + color + ";'>Tu nombre es: " + nombre + "</h3>");
    pestaya.document.write("<h3 style='color: " + color + ";'>Tu apellido es: " + apellido + "</h3>");
    pestaya.document.write("<h3 style='color: " + color + ";'>Tu edad es: " + edad + "</h3>");
}