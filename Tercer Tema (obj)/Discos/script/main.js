"use strict";

import { Coleccion,Disco,Autor } from "./Coleccion.js";


try {
    var coleccion = new Coleccion();
    coleccion.precargarDiscos();
    var salida = false;
    do {
        var eleccion = Number(prompt("1: Agregar un disco\n2: Mostrar un disco\n3: Borrar un disco\n4: Prestar un disco\n5: Devolver un disco\n6: Listar autores y sus discos\n7: Listar colección completa\n8: Salir"));
        switch (eleccion) {
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
            case 2:
                 coleccion.buscarDisco(prompt("Introduce el nombre del disco"));
                if (disco) {
                    alert(`Nombre: ${disco.nombre}\nAutor: ${disco.autor.nombre}\nFecha de publicación: ${disco.fecha_publicacion}\nTipo: ${disco.tipo}\nEstado: ${disco.estado}\nLocalización: ${disco.localizacion}`);
                } else {    
                    alert("Disco no encontrado");
                }
                break;
            case 3:
                // Implementar borrar disco
                disco.borrarDisco(prompt("Introduce el nombre del disco"));
                alert("Disco borrado con éxito");
                break;
            case 4:
                disco.prestarDisco(prompt("Introduce el nombre del disco"));
                alert("Disco prestado con éxito");
                break;
            case 5:
                disco.devolverDisco(prompt("Introduce el nombre del disco"));
                alert("Disco devuelto con éxito");
                break;
            case 6:
                coleccion.listarAutores();
                break;
            case 7:
                coleccion.listarColeccion();
                break;
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