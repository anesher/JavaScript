export class inventario{
    #precio
    #cantidad
    constructor(nombre,cantidad,precio){
        this.nombre=nombre;
        this.#cantidad=cantidad;
        this.#precio=precio;
    }
    get nombre(){
        return this.nombre;
    }
    get precio(){
        return this.#precio;
    }
    get cantidad(){
        return this.#cantidad;
    }
    set precio(nuevoPrecio){
        if(this.#precio>0){
        this.#precio=precio;
        }
    }
}