"use strict";
import { Premio } from "./Premio.js";
export class Programa{
    // creamos la clase Programa y dentro de ella creamos el constructor con los parametros nombre, premios y opurtinidades
    constructor(nombre,premios,opurtinidades){
        this.nombre = nombre;
        this.premios = [];
        //le metemos opurtinidades para que nos de un numero aleatorio entre 2 y 5
        this.opurtinidades = Math.floor(Math.random() * 3)+2;
    }
   
}