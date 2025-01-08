/*
Crea un html con tres botones, uno para incrementar otro para decrementar y otro para mostrar
resultado. Empezaremos a contar desde cero, cada vez que se pulse el botón de incrementar se
sumará uno y cada vez que se pulse decrementar se restará uno, cuando se pulse en mostrar
resultado se mostrará un alert con el total acumulado y se reseteará el valor para poder volver a
empezar.
*/
"use strict"

var numero=0;

function sumar(){
    numero++;
}

function restar(){
    numero--;
}

function igual(){
    alert(numero);
}