"use strict";
document.addEventListener("DOMContentLoaded",function(){
const cuadro=document.getElementById("div");
let x=0
let y=0;
document.addEventListener("keydown",function(event) {
    if (event.key==="w")y-=10;//mover hacia arrina
    if(event.key==="s")y+=10;//mover hacia abajo
    if(event.key==="a")x-=10;//mover hacia la izquierda
    if(event.key==="d")x+=10;//mover hacia la derecha

    cuadro.style.transform="translate("+x+"px,"+y+"px)";
})
})