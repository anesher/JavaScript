class Autor {
    constructor(nombre, fechaNacimiento) {
        this.nombre = nombre; // Nombre del autor
        this.fechaNacimiento = fechaNacimiento; // Fecha de nacimiento del autor
        this.discosPublicados = []; // Array de discos publicados por el autor
    }

    agregarDisco(disco) {
        this.discosPublicados.push(disco); // Agregar un disco al array de discos publicados
    }
}

export { Autor };