/* Crea una función constructora Animal con propiedades especie y edad. Luego, crea una función Perro que herede de
 Animal y añada una propiedad raza. Añade un método ladrar al prototipo de Perro que imprima "¡Guau!".
*/

function Animal(especie, edad){
    this.especie=especie;
    this.edad=edad;
}

function Perro(especie,edad, raza){
    Animal.call(this,especie,edad);
    this.raza=raza;
    this.ladrar=function(){
        console.log("guau, guau");
    }
}

var animal1=new Animal("raton",12);
var perro1=new Perro ("perro",15,"pastor belga");
console.log(animal1);
console.log(perro1);
perro1.ladrar();