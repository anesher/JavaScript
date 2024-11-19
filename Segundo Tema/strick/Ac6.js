"use strick"

/*
Crea un juego en el que el usuario tenga que adivinar un número entre 1 y 10 con un máximo de 3
intentos.
*/
let num=Math.floor(Math.random(10)+1);
let i=0;
do{
let propio=Number(prompt("dame un numero del uno al 10"));
 if(num===propio){
    alert(`has ganado por el numero aleatorio era ${num}`);
    i=6;
 }else{
    alert(`no es lo siento intentalo de nuevo`);
 }
i ++;
alert(`llevas ya ${i}`);
}while(i>3);