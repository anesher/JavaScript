const btn=document.getElementById('boton');
const pa=document.querySelectorAll('li')[2];
console.log(pa);
 btn.addEventListener("click",function(){
    pa.innerText="Elemento actualizado";
});