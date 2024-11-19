"use strick"

/*
Escribe un programa que pida dos valores por prompt, deberá preguntar si se desea convertir alguno de
los valores a número y una vez que tengamos los dos valores en el tipo deseado deberemos compararlos
y deberemos mostrar por alert si son iguales en tipo y valor, solo en valor o son diferentes. Por consola
deberemos mostrar de que tipo de dato se trata.

Para este ejercicio podemos usar confirm(), se trata de una función integrada que se utiliza como un prompt,
pero en este caso muestra un cuadro de dialogo con dos botones Aceptar y Cancelar, y devuelve un booleano
*/

let numero=prompt("dame un valor");
let value=confirm("¿lo pasamos a numero?");
 if(value){
    numero=Number(numero);
 }

let numero2=prompt("dame otro valor");
let value2=confirm("¿lo pasamos a numero 2?");
 if(value2){
    numero2=Number(numero2);
 }

let valor=typeof numero;
let valor2=typeof numero2;
console.log(valor);
console.log(valor2);


if(numero==numero2 && valor===valor2){
   console.log("es el mismo numero y mismo valor");
} else if (valor===valor2){
    console.log("tiene el mismo valor");
}else if(numero==numero2 ){
    console.log("es el mismo numero");
    } else{
    console.log("es diferente");
}