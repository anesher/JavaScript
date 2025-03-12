/*
Crea un formulario con un campo de entrada para añadir tareas a una lista. 
Guárdala en localStorage y actualiza la lista visible.
Permite que el usuario pueda eliminar tareas individuales, actualizando la interfaz y el almacenamiento local después de cada eliminación
*/
const btnG = document.getElementById("guardar");
const form = document.querySelector("form");
const tareas = document.getElementById("tareas");
const ul = document.querySelector("ul");
let contador=0;
window.onload=function(){
    
    function guardar(){
        localStorage.setItem(contador,tareas.value);
        contador++;
    }
}