"use strick"

/*
Crea un programa que determine si un número ingresado por el usuario es par o impar
*/

let numero=Number(prompt("dame un numero"));
let res=numero%2;
if (res===0){
    alert(`el numero : ${numero} es par`);
}else{
    alert(`el numero : ${numero} es impar`);
}