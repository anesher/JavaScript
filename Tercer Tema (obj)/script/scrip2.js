/*Crea un objeto persona con propiedades: nombre, edad, y un método saludar que muestre por consola
“hola me llamo (nombre) y tengo (edad) años”.*/

function Persona(nombre,edad){
    this.nombre=nombre,
    this.edad=edad,
    this.saludo=function(){
        return `Hola ${this.nombre} y tengo ${this.edad} edad`;
    };
}

var persona1= new Persona("Antonio", 12)
console.log(persona1.saludo());