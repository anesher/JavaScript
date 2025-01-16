"use strict"
// se utiliza una funcion para poder cacular la suma
function calcularSuma(uno, dos, cinco, diez, vente, cincuenta){
    // se mutiplica cada moneda que hay por su valor para saber cuantos centimos tenemos de cada
    dos=dos*2;
    cinco=cinco*5;
    diez= diez*10;
    vente=vente*20;
    cincuenta=cincuenta*50;
    // se suma todos los centimos
    let totalcen =  uno+dos+cinco+diez+vente+cincuenta;
    // se calcula cuanto euros tenemos
    let totaleur= totalcen/100;
    // se calucla el todal de dolares que hay
    let totaldol= totaleur*1.08;
    return "Tienes en total "+ totalcen + " centimos, de  " +totaleur+ " euros y de " +totaldol+ " dolares";

}


let uno=Number(prompt("Cuantas monedas tienes de un centimo"));
let dos=Number(prompt("Cuantas monedas tienes de dos centimo"));
let cinco=Number(prompt("Cuantas monedas tienes de cinco centimo"));
let diez=Number(prompt("Cuantas monedas tienes de diez centimo"));
let vente=Number(prompt("Cuantas monedas tienes de vente centimo"));
let cincuenta=Number(prompt("Cuantas monedas tienes de cicuenta centimo"));
alert(calcularSuma(uno, dos, cinco, diez, vente, cincuenta));
