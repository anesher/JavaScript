"use strick"

function color(){
    var numero=Math.random()*16;
}

function boton1(){
    document.body.style.background="blue";
    console.log("Entra");
}

function boton2(){
    document.body.style.background="red";
}

function boton3(){
    document.body.style.background="green";
}

function random(){
    var r=Math.random()*(255-0)+0;
    var g=Math.random()*(255-0)+0;
    var b=Math.random()*(255-0)+0;
    document.body.style.background= "rgb("+r+","+g+","+b+")";
}
