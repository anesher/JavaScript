"use script"

import { Coleccion } from "./Coleccion";

try {
    var coleccion = new Coleccion();
    var disco = new Disco();
    var salida=0;
    do{
    var eleccion=Number(prompt("si quieres introducir un agregar un disco pulse 1, si quiere mostrar un disco pulsar 2,"+
        "si quiere borrar un disco pulse 3, si quiere prestar un disco pulse 4, si quiere devolver un disco pulse 5"));
    switch(eleccion){
        case 1:
            disco.agregarDisco();
            break;
        case 2:
            disco.mostrarDisco();
            break;
        break;
        case 3:
            disco.borraDisco();
            break;
        case 4:
            disco.prestarDisco();
            break;
        case 5:
            disco.devolverDisco();
            break;
        default:
            console.log("opcion no valida");
            break;
    }
    salida=Number(prompt("si quiere salir pulse 9"));
    }while(salida!=9);
    
    } catch (error) {
        console.log("algo salio mal: "+error.message);
    }