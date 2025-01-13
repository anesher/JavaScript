"use script"

export class Dinosaurio{
    
    
    constructor(nombre,posicionx,posiciony,estado){
        this.nombre=nombre;
        this.posicionx=posicionx;
        this.posiciony=posiciony;
        if(this.estado==="hambriento" || this.estado==="enfadado" ||this.estado==="tranquilo"|| this.estado==="sueño"){
            throw new Error("El estado  no es correcto");
        }else{
            this.estado=estado;
        }
        this.ventana=window.open('','','width=100,height=100');
    }



    agregarDinosaurio() {
        let nombre = prompt("Introduce el nombre del dinosaurio");
        let estado = prompt("Introduce el estado del dinosaurio, que puede ser hambriento, enfadado, tranquilo, sueño");

        let dinosaurio = { nombre: nombre, estado: estado };
        this.dinosaurios.push(dinosaurio);

        alert("Se ha agregado el dinosaurio con éxito");
        this.ventana.document.write("Bienvenido"+this.nombre+" y esta"+this.estado);
    }

    mover(){
        
    }
   
}