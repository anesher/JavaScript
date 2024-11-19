"use strick"

/*
Crea un programa que convierta una temperatura dada en grados Celsius a grados Fahrenhenit. Usa
prompt para pedir la temperatura en grados Celsius y muestra por alert la temperatura en Fahrenheit.
Utiliza la fórmula F=(C*9/5)+32
*/

let Celsius=Number(prompt("que grados celsius quieres convertir"));

var Fahrenheit= (Celsius*9/5)+32;

alert(`los grados celsius que tienes son : ${Celsius}  y los grados Fahrenheir son ${Fahrenheit}`);