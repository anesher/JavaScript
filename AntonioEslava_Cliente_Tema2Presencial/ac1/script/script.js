"use strict"
// se incializa el array
let array=[];
// se incializa la salida para el do while
let salida=0;
// se utiliza la funcion registrarAsistente para incluir dentro del array el nombre y despues darle la bienvenida
function registrarAsistente(array,nombre){
    array.push(nombre);
    return "Se ha añadido correctamete "+ nombre+ " al curso";    
}
// se crea la funcion mostrasDetallesCurso para poner en una lista todos aquellos que se han apuntado
let mostrarDetallesCurso=array.forEach(function(index, array){
    console.log(`${index}:${array}`);
});
// por ultimo se crea un enviarRecordtario para hacer la funcion de recorrer el array darle la bienvenida a cada uno
let enviarRecordatorio =(array)=> {
    for (let i=0; i<array.length;i++){
        console.log(array[i] + " bienveniddo al curso");
    }
};
do{
let nombre=prompt("registre el nombre del asistente");
console.log(registrarAsistente(array, nombre));
salida=Number(prompt("quieres introducir algun otro alumno a este curso, si es asi pulse 1 sino otro numero"))
}while(salida===1);
console.log(array);
mostrarDetallesCurso;
console.log(enviarRecordatorio(array));