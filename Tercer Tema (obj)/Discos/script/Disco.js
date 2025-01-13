"use script"
import {Autor} from "./autor.js";

export class Disco{
    Autor = new Autor(nombre,fecha_nacimiento,discos_publicados);
    constructor(nombreD,nombreA,fecha_publicacion,tipo,estado,localizacion){
        Autor.call(this,nombreA,discos_publicados);
        this.nombreD = nombreD;
        this.fecha_publicacion = fecha_publicacion;
        this.tipo = tipo;
        this.localizacion = localizacion;
        if(this.estado==="prestado" ){
            this.estado = null;
        }else if(this.estado==="disponible"){
            this.estado = true;
            }else{
            throw new Error("El estado del disco no es válido");
        }
    }
    agregarDisco(){
        let nombreD = prompt("Introduzca el nombre del disco");
        this.discos_publicados.push(this.nombreD);
    }
    mostrarDisco(){
        array.forEach(element => {
            console.log(this.nombreD)
        });;
    }
    borraDisco(){
        let nombreD = prompt("Introduzca el nombre del disco");
        this.discos_publicados.pop(this.nombreD);
    }
    prestarDisco(){
        if(this.estado===true){
            this.estado = false;
        }else{
            throw new Error("El disco no está disponible");
        }
    }
    devolverDisco(){
        if(this.estado===false){
            this.estado = true;
        }else{
            throw new Error("El disco no está prestado");
        }
    } 
   
}