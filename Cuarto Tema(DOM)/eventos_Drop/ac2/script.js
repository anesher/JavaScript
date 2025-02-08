document.addEventListener("DOMContentLoaded",function(){
    var parrafo=document.getElementById("p");

    parrafo.addEventListener("mouseover", function(){
        this.style.color="red";
    })

    parrafo.addEventListener("mousedown", function(){
        parrafo.style.color="black";
    })
})