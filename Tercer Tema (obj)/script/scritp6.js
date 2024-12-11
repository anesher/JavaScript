/*
Añade un método más al prototipo de Persona llamado cumplir años que aumente la edad de la persona
en 1. Luego crea un objeto y prueba ambos métodos.
*/

function Persona(nombre,edad){
    this.nombre=nombre;
    this.edad=edad;
    
}
Persona.prototype.saludo=function(){
     console.log (`Hola mi nombre es ${this.nombre} y tengo ${this.edad}`);
}
Persona.prototype.cumpliayo=function(){
    console.log(this.edad+1);
}
var Persona1=new Persona('antonio',12);
var Persona2=new Persona('Miguel', 15);
console.log(Persona1);
console.log(Persona2);
Persona1.saludo();
Persona2.saludo();
Persona1.cumpliayo();
Persona2.cumpliayo();