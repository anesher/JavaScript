"use strict";
import { Autor } from "./Autor.js";

export class Disco {
    constructor(nombre, autor, fechaPublicacion, tipo, estado, localizacion) {
        this.nombre = nombre; // Nombre del disco
        this.autor = autor; // Autor del disco
        this.fechaPublicacion = fechaPublicacion; // Fecha de publicación del disco
        this.tipo = tipo; // Tipo de música del disco
        this.localizacion = localizacion; // Localización del disco (estantería y posición)
        
        // Estado del disco (prestado/disponible)
        if (estado === "prestado") {
            this.estado = false; // Estado false significa prestado
        } else if (estado === "disponible") {
            this.estado = true; // Estado true significa disponible
        } else {
            throw new Error("El estado del disco no es válido"); // Error si el estado no es válido
        }
    }
}