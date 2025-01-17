"use strict";
import { Disco } from "./Disco.js";
import { Autor } from "./Autor.js";

export class Coleccion {
    constructor() {
        this.estanterias = [[]]; // Inicializar la colección con una estantería vacía
    }

    // Método para agregar un disco a la colección
    agregarDisco(disco) {
        let ultimaEstanteria = this.estanterias[this.estanterias.length - 1]; // Obtener la última estantería de la colección
        
        // Verificar si la última estantería tiene menos de 10 discos
        if (ultimaEstanteria.length < 10) {
            ultimaEstanteria.push(disco); // Si tiene menos de 10 discos, agregar el disco a la última estantería
        } else {
            this.estanterias.push([disco]); // Si tiene 10 discos, crear una nueva estantería y agregar el disco a la nueva estantería
        }
    }

    // Método para listar los autores y sus discos publicados
    listarAutores() {
        const autores = {};
        
        // Recorrer todas las estanterías y discos
        this.estanterias.flat().forEach(disco => {
            // Si el autor no está en el objeto autores, agregarlo con un array vacío
            if (!autores[disco.autor.nombre]) {
                autores[disco.autor.nombre] = [];
            }
            // Agregar el nombre del disco al array de discos del autor
            autores[disco.autor.nombre].push(disco.nombre);
        });
        
        // Imprimir el objeto autores en la consola
        console.log(autores);
    }

    // Método para listar la colección completa
    listarColeccion() {
        console.log(this.estanterias); // Imprimir todas las estanterías y discos en la consola
    }

    // Método para precargar 20 discos en la colección
    precargarDiscos() {
        for (let i = 1; i <= 20; i++) {
            let autor = new Autor(`Autor ${i % 5}`, `Fecha ${i % 5}`); // Crear un nuevo autor
            let disco = new Disco(`Disco ${i}`, autor, `Fecha ${i}`, `Tipo ${i}`, 'disponible', `Estantería ${Math.floor(i / 10) + 1}`); // Crear un nuevo disco
            this.agregarDisco(disco); // Agregar el disco a la colección
        }
    }

  mostrarDiscos() {
    this.listarColeccion();
    }

    // Método para borrar un disco de la colección
    borrarDisco(nombre) {
        for (let i = 0; i < this.estanterias.length; i++) {
            const estanteria = this.estanterias[i];
            const index = estanteria.findIndex(disco => disco.nombre === nombre);
            if (index !== -1) {
                estanteria.splice(index, 1); // Eliminar el disco de la estantería
                return true;
            }
        }
        return false; // Retornar false si el disco no se encontró
    }

    // Método para prestar un disco (solo si está disponible)
    prestarDisco(nombre) {
        for (const estanteria of this.estanterias) {
            const disco = estanteria.find(disco => disco.nombre === nombre);
            if (disco && disco.estado) {
                disco.estado = false; // Cambiar el estado del disco a prestado
                return true;
            }
        }
        return false; // Retornar false si el disco no está disponible o no se encontró
    }

    // Método para devolver un disco (solo si está prestado)
    devolverDisco(nombre) {
        for (const estanteria of this.estanterias) {
            const disco = estanteria.find(disco => disco.nombre === nombre);
            if (disco && !disco.estado) {
                disco.estado = true; // Cambiar el estado del disco a disponible
                return true;
            }
        }
        return false; // Retornar false si el disco no se encontró o ya está disponible
    }
}