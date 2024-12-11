/*
 Crea un objeto vehiculo con una propiedad tipo y un método mover. Crea otro objeto coche que herede de vehiculo 
 y agregue una propiedad marca. Luego, crea un objeto deportivo que herede de coche y agregue un método acelerar. 
 Usa los tres objetos en secuencia para verificar la herencia. Crea los objetos con Object.create() para establecer 
 la herencia entre ellos. Utiliza las propiedades heredadas y los métodos en el objeto más específico.
*/
function vehiculo(tipo){
    this.tipo=tipo;
}
vehiculo.prototype.mover=function(){
    console.log(`se ha movido ${this.tipo}`);
}
function coche(tipo,marca){
    vehiculo.call(this,tipo);
    this.marca=marca;
}
coche.prototype=Object.create(vehiculo.prototype);
coche.prototype.mover=function(){
    console.log(`se ha movido ${this.tipo} y marca ${this.marca}`);
}

function deportivo(tipo, marca){
    coche.call(this,tipo,marca);
}
deportivo.prototype.acelerar=function(){
    console.log(`se ha movido ${this.tipo} y marca ${this.marca} y ha acelerado`);
}
var vehiculo1=new vehiculo("mercedes");
vehiculo1.mover();
var coche1= new coche("mercedes","blanco");
coche1.mover();
var deportivo1=new deportivo("merdes","blanco");
deportivo1.acelerar();

