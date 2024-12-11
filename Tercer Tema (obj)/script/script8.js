/*Añade un método describir al prototipo de Animal que describa la especie y la edad del animal. 
Luego sobreescribe este método en Perro para que incluya también la raza.*/

function Animal(especie, edad){
    this.especie=especie;
    this.edad=edad;
    
}
Animal.prototype.describir=function(){
    console.log (`tienes ${especie} de ${edad} años`);
}

function Perro(especie,edad, raza){
    Animal.call(this,especie,edad);
    this.raza=raza;
}
Perro.prototype=Object.create(Animal.prototype);
Perro.prototype.describir=function(){
    console.log(`tienes ${this.especie} de ${this.edad} años y de raza ${this.raza}`);
}
var animal1=new Animal('raton',12);
var perro1=new Perro ('perro',15,'pastor belga');
console.log(animal1);
console.log(perro1);
perro1.describir();
