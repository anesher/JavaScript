/*
Crea un programa que informe del tamaño de la pantalla, si usa una tablet pon el
fondo en rojo y un texto indicando que está usando una tablet, para el movil el color
azul y el texto que indique que es un movil y para escritorio el color amarillo y el
texto es un ordenador de sobremesa.
Si el tamaño es de móvil escribe un h5, si es de tablet un h3 y si es ordenador un h1.
Intenta hacerlo con document.body.style.fontsize
*/
"use strict"

function tamayo(){
    var ancho=screen.width;
    var alto=screen.height;

    if(ancho<=400 && alto<=750){
        document.write("Esto es un movil");
        document.body.style.background="blue";
        document.body.style.fontSize="70px";

    }else if(ancho<=720 && alto<=1280){
        document.write("Esto es un tablet");
        document.body.style.background="red";
        document.body.style.fontSize="100px";
    }else{
        document.write("Esto es un ordenador");
        document.body.style.background="yellow";
        document.body.style.fontSize="110px";
    }
}