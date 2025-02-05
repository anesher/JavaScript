"use strict";

export class Carta {
    constructor() {
        this.carta = [];

        this.imagenes = {
            1: "./imagenes/imagen1.jpg",
            2: "./imagenes/imagen2.jpg",
            3: "./imagenes/imagen3.jpg",
            4: "./imagenes/imagen4.jpg",
            5: "./imagenes/imagen5.jpg",
            6: "./imagenes/imagen6.jpg",
            7: "./imagenes/imagen7.jpg",
            8: "./imagenes/imagen8.jpg",
        };

        let cartasTemp = [];
        for (let i = 1; i <= 8; i++) {
            cartasTemp.push({ numero: i, imagen: this.imagenes[i] });
            cartasTemp.push({ numero: i, imagen: this.imagenes[i] });
        }

        // Mezclar las cartas aleatoriamente
        this.carta = cartasTemp.sort(() => Math.random() - 0.5);
    }
}

/*export const cartas = [
"./imagenes/imagen1.jpg",
"./imagenes/imagen2.jpg",
"./imagenes/imagen3.jpg",
"./imagenes/imagen4.jpg",
"./imagenes/imagen5.jpg",
"./imagenes/imagen6.jpg",
"./imagenes/imagen7.jpg",
"./imagenes/imagen8.jpg",
];*/
 