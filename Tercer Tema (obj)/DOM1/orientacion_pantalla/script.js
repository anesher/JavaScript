/*
Modificar el estilo de la fuente y el color de fondo del <body> según la orientación de
la pantalla del dispositivo utilizando JavaScript.
Existen métodos que posiblemente nos digan si una pantalla está en vertical o en
horizontal, pero estoy segura que sabremos hacerlo con las herramientas que
tenemos
*/
"use strict"

var alto=screen.width;
var ancho=screen.height;

function tamayo(){
    if(ancho>alto){
        document.write("Esto es mas ancho")
        document.body.style.background="red";
        document.body.style.fontSize="24px";
    }else{
        document.write("Esto es mas alto");
        document.body.style.background="yellow";
        document.body.style.fontSize="33px";
    }
}