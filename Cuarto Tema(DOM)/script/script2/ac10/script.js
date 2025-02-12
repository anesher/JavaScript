"use script"
const add=document.getElementById("add");
const borrar=document.getElementById("delete");
const ul=document.querySelector("ul");

add.addEventListener("click",function(){
    let nuevo=document.createElement("li");
    nuevo.textContent=prompt("Pon algo");
    ul.appendChild(nuevo);
});

borrar.addEventListener("click",function(){
    let borrar=ul.lastElementChild;
    borrar.remove();
})