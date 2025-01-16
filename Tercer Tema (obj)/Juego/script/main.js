"use strict";
//importamos las clases Programa y Premio
import { Programa } from "./Programa.js";
import { Premio } from "./Premio.js";
//instanciamos la clase Programa
let programa = new Programa();
//declaramos las variables
let variable = 0;
let salida = 0;
let juego=0;
let veces=0;
//creamos un try catch para que si hay un error poder capturarlo como por ejemplo si la categoria no es buena o mala
try {
    //le metemos los premios que queramos pa que puedas empezar a jugar
    programa.premios.push(new Premio("baul", "baul de madera", 1000, "bueno"));
    programa.premios.push(new Premio("caja", "caja de carton", 500, "malo"));
    programa.premios.push(new Premio("mesa", "mesa de carton", 55, "malo"));
    programa.premios.push(new Premio("silla", "silla de carton", 100, "malo"));
    programa.premios.push(new Premio("ordenador", "ordenador de ultima generacion", 1000, "malo"));
    programa.premios.push(new Premio("movil", "movil de ultima generacion", 1000, "malo"));
    programa.premios.push(new Premio("cuadro", "Gernika Pablo Picaso", 10000, "bueno"));
    programa.premios.push(new Premio("coche", "coche de ultima generacion", 100000, "bueno"));
    programa.premios.push(new Premio("casa", "casa de ultima generacion", 1000000, "bueno"));
    programa.premios.push(new Premio("avion", "avion de ultima generacion", 10000000, "bueno"));
    // le metemos un do while para que se repita el programa hasta que el usuario quiera salir
    do {
        variable = Number(prompt("si desea ver los premios pulse el numero 1, si desea agregar un premio pulse el numero 2, si desea jugar pulse el numero 3 y si quiere salir pulse el 4"));
        //le metemos un switch para que segun la opcion que elija el usuario haga una cosa u otra
        switch (variable) {
            case 1:
                //le metemos un for para que nos muestre los premios que tenemos
                for (let i = 0; i < programa.premios.length; i++) {
                    console.log(`Nombre: ${programa.premios[i].nombre}`);
                }
                break;

            case 2:
                //le pedimos al usuario que nos de los datos del premio que quiere añadir y lo añadimos al array de premios
                let nombre = prompt("Ingrese el nombre del premio");
                let descripcion = prompt("Ingrese la descripcion del premio");
                let precio = Number(prompt("Ingrese el precio del premio"));
                let estado = prompt("Ingrese el estado del premio");
                programa.premios.push(new Premio(nombre, descripcion, precio, estado));
                break;

            case 3:
                //le decimos al usuario que se prepare para jugar y le pedimos que introduzca el precio del objeto
                alert("Preparense porque el siguiente juego comienza en 3, 2, 1...");
                let juego = Math.floor(Math.random() * 10);
                alert (`¿Cuanto crees que cuesta este objeto? ${programa.premios[juego].descripcion}`);

                while( veces >=programa.opurtinididades){
                let precioJuego = Number(prompt("Introduce el precio del objeto"));
                alert("Comprobando precio...");

                //le metemos un if para que si el precio que ha introducido el usuario es igual al precio del objeto le salga un mensaje diciendo que ha ganado
                if (precioJuego === programa.premios[juego].precio) {
                    window.open('','','width=200,height=100');
                    window.document.write(` Enhorabuena!!! :Nombre: ${programa.premios[juego].nombre}, Precio: ${programa.premios[juego].precio}, Estado: ${programa.premios[juego].estado}`);
                    window.close();
                    // le metemos un break para que si ha acertado salga del bucle
                    break;
                }else if(precioJuego>=programa.premios[juego].precio-10 && precioJuego<programa.premios[juego].precio){
                    window.open('','','width=200,height=100');
                    window.document.write(` Enhorabuena!!! :Nombre: ${programa.premios[juego].nombre}, Precio: ${programa.premios[juego].precio}, Estado: ${programa.premios[juego].estado}`);
                    window.close();
                    break;
                }else {
                    // si no acierta se vuelva a repetir el bucle y le decimos que lo siga intentando
                    window.open('','','width=200,height=100');
                    window.document.write("Hoy no es tu dia!");
                    window.close();
                }
                veces++;
            }
            // si no aceirta en las oportunidades que le hemos dado le saldra un mensaje diciendo que ha perdido
            window.open('','','width=200,height=100');
            window.document.write("Has perdido todas tus oportunidades");
            window.document.body.style.backgroundColor = "red";
            window.close();
                break;
            case 4:
                // si el usuario elige la opcion 4 saldra del programa
                salida = 1;
                break;
            default:
                console.log("Opción no válida");
        }
    } while (salida === 0);
} catch (error) {
    // donde capturamos el error y lo mostramos por consola
    console.error("Se produjo un error: ", error);
}