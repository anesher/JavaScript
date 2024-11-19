"use script"
// tienes que elegir una de las tres opciones 
let seguridad=prompt("que prefieres una contraseña con seguridad alta, media o baja");
// se utiliza un switch para cuando hayas elegido alta, media o baja te pueda meter en uno de los tres casos
switch(seguridad){
    case "alta":
        // Math.random()*10)+1 se utiliza para coger un numero random entre 1 y 10 para eso el +1; en mi caso como la seguridad es alta
        // lo que he hecho es poner que el maximo para escoger sea 1000000000 y que empieza minimo en +1000, y asi igual en los otros tres casos
        alert(Math.floor(Math.random()*1000000000)+1000);
        break;
    case "media":
        alert(Math.floor(Math.random()*100000)+100);
        break;
    case "baja":
        alert(Math.floor(Math.random()*10)+1);
        break;
    // se utiliza el default para cuando no has tecleado ninguno de los tres casos que te ofrecen al principio, y dentro tenemos un 
    // console.error para indicarlo
    default:
        console.error("introduce uno de las tres opciones");
        break;
}