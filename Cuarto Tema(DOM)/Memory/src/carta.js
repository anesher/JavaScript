"use strict";

export class Carta {
    constructor(nivel) {
        this.imagenes = {
            1: "./imagenes/imagen1.jpg",
            2: "./imagenes/imagen2.jpg",
            3: "./imagenes/imagen3.jpg",
            4: "./imagenes/imagen4.jpg",
            5: "./imagenes/imagen5.jpg",
            6: "./imagenes/imagen6.jpg",
            7: "./imagenes/imagen7.jpg",
            8: "./imagenes/imagen8.jpg",
            9: "./imagenes/imagen9.jpg",
            10: "./imagenes/imagen10.jpg",
            11: "./imagenes/imagen11.jpg",
            12: "./imagenes/imagen12.jpg",
            13: "./imagenes/imagen13.jpg",
            14: "./imagenes/imagen14.jpg",
            15: "./imagenes/imagen15.jpg",
            16: "./imagenes/imagen16.jpg",
            17: "./imagenes/imagen17.jpg",
            18: "./imagenes/imagen18.jpg",
        };

        let cartasTemp = [];
        // Validar que no se excedan las imágenes disponibles
        const maxPares = Math.min(18, (nivel * nivel) / 2);
        for (let i = 1; i <= maxPares; i++) {
            cartasTemp.push({ numero: i, imagen: this.imagenes[i] });
            cartasTemp.push({ numero: i, imagen: this.imagenes[i] });
        }

        this.carta = cartasTemp.sort(() => Math.random() - 0.5);
    }
}