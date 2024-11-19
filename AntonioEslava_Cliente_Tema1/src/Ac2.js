"use script"
// se ingresa los años que tienes 
let ayo= Number(prompt("introduce su edad"));

// se utiliza un if para ir poniendo condiciones y asi saber si eres mayor o menor, la primera condicion es que tengas menos de 18 y mas de 0 años
if(ayo<18 && ayo>0){
    alert("eres menor de edad");
    // ahora se va utilizar otra condicion para que entre solo los que tienen menos 130 o los que son de 18 años
}else if(ayo>130 || ayo===18){
    alert("eres mayor de edad");
}else{
    // como tenemos arriba ya estructurado todo lo que queremos que entre ponemos este else por si ingresan un año muy alto o muy chico
    console.warn("los valores ingresados son o muy altos o muy chicos")
}