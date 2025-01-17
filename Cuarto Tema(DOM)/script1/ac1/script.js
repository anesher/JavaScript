const titulo=document.getElementById('titulo');
const boton=document.getElementById('boton');

boton.addEventListener("click",function(){
    titulo.innerHTML="<h1>Título actualizado</h1>";
})