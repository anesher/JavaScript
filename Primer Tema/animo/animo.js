"use script"

let animo=prompt("¿Como estas feliz, triste,cansado, o emocionado?");

switch(animo){
    case "feliz":
        alert("Feliz =Mono de Espalda Plateada");
        break;
    case "triste":
        alert("triste = monito triste");
        break;
    case "cansado":
        alert("cansado= perezoso");
        break;
    case "emocionado":
        alert("emocionado=loro");
        break;
    default:
        console.warn("introduce uno que este en la lista")   
}