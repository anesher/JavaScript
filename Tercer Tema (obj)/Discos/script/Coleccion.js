"use strict";
import { Disco,Autor } from "./Disco.js";


export class Coleccion {
    constructor() {
        this.estanterias = [[]];
    }

    agregarDisco(disco) {
        let ultimaEstanteria = this.estanterias[this.estanterias.length - 1];
        if (ultimaEstanteria.length < 10) {
            ultimaEstanteria.push(disco);
        } else {
            this.estanterias.push([disco]);
        }
    }
    
    listarAutores() {
        const autores = {};
        this.estanterias.flat().forEach(disco => {
            if (!autores[disco.autor.nombre]) {
                autores[disco.autor.nombre] = [];
            }
            autores[disco.autor.nombre].push(disco.nombre);
        });
        console.log(autores);
    }

    listarColeccion() {
        console.log(this.estanterias);
    }

    precargarDiscos() {
        for (let i = 1; i <= 20; i++) {
            let autor = new Autor(`Autor ${i % 5}`, `Fecha ${i % 5}`);
            let disco = new Disco(`Disco ${i}`, autor, `Fecha ${i}`, `Tipo ${i}`, 'disponible', `Estantería ${Math.floor(i / 10) + 1}`);
            this.agregarDisco(disco);
        }
    }

    
}