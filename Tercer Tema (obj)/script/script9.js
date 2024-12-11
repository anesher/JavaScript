/*
Usa Object.create() para crear un objeto gato que herede de Animal y añade un método maullar al objeto gato. 
Luego, llama a gato.maullar() y describe al gato usando el método describir heredado de Animal.
*/
function Animal(especie, edad){
    this.especie=especie;
    this.edad=edad;
}
Animal.prototype.describir=function(){
    console.log (`tienes ${this.especie} de ${this.edad} años`);
}
function Gato(especie,edad){
    Animal.call(this,especie,edad);
}
Gato.prototype=Object.create(Animal.prototype);

Gato.prototype.maullar=function(){
    console.log('maullar');
}
Gato.prototype.describir=function(){
    console.log (`tienes ${this.especie} de ${this.edad} años`);
}
var gato1=new Gato('gato',2);
console.log(gato1);
gato1.maullar();
gato1.describir();