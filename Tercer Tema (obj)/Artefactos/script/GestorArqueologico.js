"use strict"
import { Artefacto } from "./Artefacto.js";

export class GestorArqueologico {

#artefactos = [];

    constructor (artefactos) {
        this.#artefactos = artefactos;
    }

agregarArtefactos () {
    let descripcionArtefacto = prompt("Introduce una descripcion del artefacto");
    let epocaArtefacto = prompt("Introduce la epoca del artefacto");
    let regionArtefacto = prompt("Introduce la region del artefacto");
    let estadoArtefacto = prompt("Introduce el estado de conservacion del artefacto");
    let precioArtefacto = Number(prompt("Introduce el precio del artefacto"));

    var artefactoAgregado = new Artefacto (descripcionArtefacto, epocaArtefacto, regionArtefacto, estadoArtefacto, precioArtefacto);
    this.#artefactos.push(artefactoAgregado);
    alert("Se ha agregado el artefacto con exito"); 
    
}

buscarArtefactos () {
    let epocaBuscar = prompt("Introduce la epoca del artefacto");
    let regionBuscar = prompt("Introduce la region del artefacto");

    let artefactosEncontrados = [];

    for (let artefacto of this.#artefactos) {
        if (artefacto.epoca === epocaBuscar &&
            artefacto.region === regionBuscar) {
                artefactosEncontrados.push(artefacto);
            }
    }

    for (let artefacto of artefactosEncontrados) {
        console.log(artefacto);
    }
}
}