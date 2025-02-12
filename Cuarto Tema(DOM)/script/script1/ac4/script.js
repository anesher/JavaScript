const btn=document.getElementById('boton');
const esp=document.querySelectorAll ('li');

btn.addEventListener("click",function(){
   esp[2].innerHTML="Nuevo texto";
})