import { GestorArqueologico } from "./GestorArqueologico.js";
try {
var gestorArqueologico = new GestorArqueologico();
var salida=0;
do{
var eleccion=Number(prompt("si quieres introducir un artefacto pulse 1, si quiere buscar pulsar 2"));
switch(eleccion){
    case 1:
        gestorArqueologico.agregarArtefactos();
        break;
    case 2:
        gestorArqueologico.buscarArtefactos();
    break;
    default:
        console.log("opcion no valida");
        break;
}
salida=Number(prompt("si quiere salir pulse 5"));
}while(salida!=5);

} catch (error) {
    console.log("algo salio mal: "+error.message);
}
