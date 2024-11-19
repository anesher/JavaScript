"use strick"

/*
Escribe un programa que verifique si un número almacenado en una variable es un entero o no. Imprime
"Es un entero" o "No es un entero " según el caso. numeor%1;
*/

let numero=Number(prompt("dame un numero"));

if(numero%1==0){
    alert(`es entero`);
}else{
    alert(`no entero`);
}