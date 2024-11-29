/*
Crea una función constructora llamada Persona que reciba nombre y edad como parámetros y que cree
objetos con esas propiedades. Luego crea dos objetos usando esa función e imprime sus propiedades.
*/

function Persona(nombre,edad){
    this.nombre=nombre;
    this.edad=edad;
}

var Persona1=new Persona('antonio',12);
var Persona2=new Persona('Miguel', 15);
console.log(Persona1);
console.log(Persona2);