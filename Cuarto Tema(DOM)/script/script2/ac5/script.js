const btn=document.getElementById("boton");
const ul=document.querySelectorAll("li")[2];

btn.addEventListener("click",function(){
    ul.remove();
});