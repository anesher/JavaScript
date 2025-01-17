const btn=document.getElementById('boton');
const ul=document.querySelectorAll ('ul');

btn.addEventListener("click",function(){
    const nuevoParrafo=document.createElement("li");
    nuevoParrafo.className="ul";
    nuevoParrafo.innerHTML="Nuevo texto";
    document.body.appendChild(nuevoParrafo);
})