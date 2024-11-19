"use script"

let nombre= prompt("¿cual es tu nombre");
let horaDia=prompt("¿que hora es en formato de 24 horas sin minutos");
horaDia=Number(horaDia);

if(horaDia<12){
    alert("Buenos dias", nombre);
}else if(horaDia>12 && horaDia<18 || horaDia===12){
    alert("Buenos tardes", nombre);
}else if(horaDia>18 && horaDia<24 || horaDia===18){
    alert("Buenas noches", nombre)
}else{
    alert("pon una horario bueno", nombre)
}