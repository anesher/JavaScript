"use script"
import {Disco} from "./disco.js";
export class Coleccion{
    disco= new Disco(nombreD,nombreA,fecha_publicacion,tipo,estado,localizacion);
    constructor(estanteria,nombreD,nombreA,fecha_publicacion,tipo,estado,localizacion){
        Disco.call(this,nombreD,nombreA,fecha_publicacion,tipo,estado,localizacion);
        if(this.estanteria.length<10){
            this.estanteria = [];
    }
    }
}