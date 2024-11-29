/*
Usa la función Persona del ejercicio anterior y añade un método al prototipo llamado saludar, que
imprima el nombre y la edad de la persona
*/

function Persona(nombre,edad){
    this.nombre=nombre;
    this.edad=edad;
    
}

Persona.prototype.saludo=function(){
     console.log (`Hola mi nombre es ${this.nombre} y tengo ${this.edad}`);
}
var Persona1=new Persona('antonio',12);
var Persona2=new Persona('Miguel', 15);
persona1.saludo();
Persona2.saludo();