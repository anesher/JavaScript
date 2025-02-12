const btn = document.getElementById('boton');
const pa = document.querySelector('div');
const ultimo = pa.lastElementChild; 
console.log(ultimo);

btn.addEventListener("click", function() {
    ultimo.innerText = "Elemento actualizado"; 
});