"use strict";
export class Premio{
    //creamos la clase Premio y dentro de ella creamos el constructor con los parametros nombre, descripcion, precio y categoria
    constructor(nombre,descripcion,precio,categoria){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        // le metemos un throw new Error para que si la categoria no es buena o mala salte un error
        if(this.categoria==="bueno"|| this.categoria==="malo"){
            throw new Error("La categoria no es valida");
        }else{
            this.categoria = categoria;
        }
    }
}