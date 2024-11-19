"use strick"

/*
    Dado un array de nombres, usa find() para buscar un nombre específico en el array. 
    Si lo encuentras, imprime   un mensaje que diga "Nombre encontrado ". 
    Si no, imprime "Nombre no encontrado ".
*/

let numeroA=Number(prompt("dame la longitud del array"));
let array=new Array();
let i=0;

while(i!=numeroA){
    let palabra=prompt("dame la palabra");
    array.push(palabra);
    i++;
}
console.log(array);

let indice=prompt("dime que quieres buscar");
    let value = array.includes(indice);
    console.log(value);

if(value){
    console.log("Nombre encontrado ");
}else{
    console.log("Nombre no encontrado");
}

