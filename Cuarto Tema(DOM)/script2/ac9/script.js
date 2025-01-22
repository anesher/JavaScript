const btn=document.getElementById("btn");
const div=document.querySelector("div");

btn.addEventListener("click", function(){
    const p=div.children[1];
    p.textContent="actualizado";
});