const btn=document.getElementById('boton');
const div=document.querySelector('div');

btn.addEventListener("click",function(){
    let nuevop=document.createElement('p');
    nuevop.textContent="hola";
    div.prepend(nuevop);
    
});