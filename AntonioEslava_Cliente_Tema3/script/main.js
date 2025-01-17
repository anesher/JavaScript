"use strict";
// Importar las clases necesarias
import { Coleccion } from "./Coleccion.js";
import { Disco } from "./Disco.js";
import { Autor } from "./Autor.js";
// utilizar un try catch para capturar los errores
try {
    var coleccion = new Coleccion();
    coleccion.precargarDiscos();
    var salida = false;
    do {
        //eleccion de las opciones
        var eleccion = Number(prompt("1: Agregar un disco\n2: Mostrar discos\n3: Borrar un disco\n4: Prestar un disco\n5: Devolver un disco\n6: Listar autores y sus discos\n7: Listar colección completa\n8: Salir"));
        switch (eleccion) {
            //caso 1 para agregar un disco con sus datos y autor 
            case 1:
                let nombre = prompt("Introduce el nombre del disco");
                let nombreAutor = prompt("Introduce el nombre del autor");
                let fechaNacimiento = prompt("Introduce la fecha de nacimiento del autor");
                let fechaPublicacion = prompt("Introduce la fecha de publicación del disco");
                let tipo = prompt("Introduce el tipo del disco");
                let estado = prompt("Introduce el estado del disco (prestado/disponible)");
                let localizacion = prompt("Introduce la localización del disco");
                let autor = new Autor(nombreAutor, fechaNacimiento);
                let disco = new Disco(nombre, autor, fechaPublicacion, tipo, estado, localizacion);
                coleccion.agregarDisco(disco);
                alert("Disco agregado con éxito");
                break;
            //caso 2 para mostrar los discos
            case 2:
                coleccion.mostrarDiscos();
                break;
            case 3:
            //caso 3 para borrar un disco
                let nombreBorrar = prompt("Introduce el nombre del disco a borrar");
                if (coleccion.borrarDisco(nombreBorrar)) {
                    alert("Disco borrado con éxito");
                } else {
                    alert("Disco no encontrado");
                }
                break;
            //caso 4 para prestar un disco
            case 4:
                let nombrePrestar = prompt("Introduce el nombre del disco a prestar");
                if (coleccion.prestarDisco(nombrePrestar)) {
                    alert("Disco prestado con éxito");
                } else {
                    alert("Disco no disponible o no encontrado");
                }
                break;
            //caso 5 para devolver un disco
            case 5:
                let nombreDevolver = prompt("Introduce el nombre del disco a devolver");
                if (coleccion.devolverDisco(nombreDevolver)) {
                    alert("Disco devuelto con éxito");
                } else {
                    alert("Disco no encontrado o ya está disponible");
                }
                break;
            //caso 6 para listar los autores y sus discos
            case 6:
                coleccion.listarAutores();
                break;
            //caso 7 para listar la coleccion completa
            case 7:
                coleccion.listarColeccion();
                break;
            //caso 8 para salir del programa
            case 8:
                salida = true;
                break;
            default:
                alert("Opción no válida");
        }
    } while (!salida);
} catch (error) {
    console.error(error);
}