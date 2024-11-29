/*
Crea un objeto libro con propiedades titulo y autor. Luego actualiza el valor de la propiedad título y
muestra el nuevo valor por consola.
*/
function Libro(titulo,autor){
    this.titulo=titulo;
    this.autor=autor;
}
var libro1=new Libro("Guardianes de la ciudadela", "Laura Gallego");
console.log(libro1);
