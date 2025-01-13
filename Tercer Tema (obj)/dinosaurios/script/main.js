import { Dinosaurio } from "./dinosario.js";

    var dino=new Dinosaurio();
    try{
        dino.agregarDinosaurio();
    } catch (error) {
    console.log("algo salio mal: "+error.message);
    }
   
        
    
