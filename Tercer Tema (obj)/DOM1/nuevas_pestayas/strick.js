/*
Crea una página web que pida al usuario en un promtp cuantas pestañas quiere abrir y abra tantas
ventanas como el usuario haya indicado
*/
"use strict"

var eleccion=prompt("¿Cuantas veces quieres que se repita");
var numero=0;
function pestayas(){
    while(eleccion!=numero){
        window.open();
        numero++;
    }
}