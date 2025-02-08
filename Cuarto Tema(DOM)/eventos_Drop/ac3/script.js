//localizamos los dos elementos en el DOM
const elemento = document.getElementById("elemento");
const contenedor = document.getElementById("contenedor");
// Evento dragstart: Se dispara al comenzar a arrastrar
elemento.addEventListener("dragstart", function (event) {
//en el setData guardamos el valor que queremos recuperar cuando soltemos
 event.dataTransfer.setData("text/plain", "Elemento arrastrado");
 console.log("Comenzó a arrastrarse");
});
// Evento dragover: Permite el evento "drop"
contenedor.addEventListener("dragover", function (event) {
 event.preventDefault(); // Necesario para permitir el "drop"
 contenedor.style.borderColor = "blue";
 console.log("Elemento sobre el contenedor");
});
// Evento dragleave: Se dispara al salir del contenedor
//Depende de nuestro ejercicio si necesitamos o no el evento dragleave
contenedor.addEventListener("dragleave", function () {
 contenedor.style.borderColor = "lightgray";
 console.log("Elemento salió del contenedor");
});
// Evento drop: Se dispara al soltar el elemento
contenedor.addEventListener("drop", function (event) {
 event.preventDefault(); // Necesario para manejar el "drop"
 const data = event.dataTransfer.getData("text/plain");
 contenedor.textContent = data; // Mostramos el contenido transferido
 contenedor.style.borderColor = "green";
 console.log("Elemento soltado");
});