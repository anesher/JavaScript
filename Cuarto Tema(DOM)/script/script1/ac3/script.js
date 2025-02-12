const btn=document.getElementById('boton');
const pa=document.querySelectorAll('.mi-clase');

btn.addEventListener("click",function(){
    pa.forEach(element => {
        element.style.backgroundColor = "yellow"; // Cambiar el color de fondo a amarillo
    });
});