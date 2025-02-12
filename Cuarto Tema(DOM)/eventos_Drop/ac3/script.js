
const elemento = document.getElementById("elemento");
const contenedor = document.getElementById("contenedor");

elemento.addEventListener("dragstart", function (event) {

 event.dataTransfer.setData("text/plain", "Elemento arrastrado");
 console.log("Comenzó a arrastrarse");
});

contenedor.addEventListener("dragover", function (event) {
 event.preventDefault(); 
 contenedor.style.borderColor = "blue";
 console.log("Elemento sobre el contenedor");
});

contenedor.addEventListener("dragleave", function () {
 contenedor.style.borderColor = "lightgray";
 console.log("Elemento salió del contenedor");
});

contenedor.addEventListener("drop", function (event) {
 event.preventDefault(); 
 const data = event.dataTransfer.getData("text/plain");
 contenedor.textContent = data; 
 contenedor.style.borderColor = "green";
 console.log("Elemento soltado");
});