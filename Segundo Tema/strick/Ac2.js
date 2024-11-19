"use strick"

/*
Escribe un programa que calcule la edad de una persona basándose en el año actual y el año de
nacimiento que ingrese el usuario. Usa prompt para pedir el año actual y el de nacimiento muestra el
resultado por alert o por console.
*/

var ayoactual=Number(prompt("que año actual estamos"));
var ayoNacimiento=Number(prompt("en que año naciste"));
var mes=prompt("has cumplido años ya esta año, si o no");
var ayo;

switch(mes){
    case "si":
        var ayo=ayoactual-ayoNacimiento;
        break;
    case "no":
        var ayo=(ayoactual-ayoNacimiento)-1;
        break;
    default: 
    alert("introduce un año verdadero")
}