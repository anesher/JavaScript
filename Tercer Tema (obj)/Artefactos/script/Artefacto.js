/*
Clase Artefacto:
Propiedades: id (número único para cada Artefacto), descripción (texto), época (texto), región (texto), 
estado de conservación (Bueno, Malo, Regular) solo serán validos uno de estos tres, precio que no podrá ser un valor inferior a 0.
Constructor que inicialice estas propiedades.
Método para actualizar el estado de conservación de un artefacto.
*/
export class Artefacto{
             
static id=1;
#descripcion='';
#epoca='';
#region='';
#estado_convercion='';
#precio=0;

    construtor(descripcion,epoca,region,estado_convercion,precio){
        this.id=Artefacto.id;
        Artefacto.id++;
        this.#descripcion=descripcion;
        this.#epoca=epoca;
        this.#region=region;
            if(this.#estado_convercion!="bueno"||this.#estado_convercion!="malo"||this.#estado_convercion!="regular"){
                throw new Error("El estado de convercion no es correcto");
            }else{
                this.#estado_convercion=estado_convercion;
            }

            if(this.#precio<0){
                throw new Error("El precio es negativo no se puede ");
            }else{
                this.#precio=precio;
            }
    }
       get descripcion(){
        return this.#descripcion;
       } 
       get epoca(){
        return this.#epoca;
       }
       get region(){
        return this.#region;
       }
       get estado_convercion(){
        return this.#estado_convercion;
       }
       get precio(){
        return this.#precio;
       }
       set descripcion(descripcion){
        this.#descripcion = this.#descripcion;
       }
       set epoca(epoca){
        this.#epoca = this.#epoca;
       }
       set region(region){
        this.#region = this.#region;
       }
       set estado_convercion(estado_convercion){
        this.#estado_convercion = this.#estado_convercion;
       }
       set precio(precio){
        this.#precio = this.#precio;
       }
}
    