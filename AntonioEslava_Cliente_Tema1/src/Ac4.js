"use script"
// se pide todas las temperaturas de las ciudades que tendran nuestra tabla
let tempCord= Number(prompt("dame la temperatura de Córdoba"));
let tempSev=Number(prompt("dame la temperatura de Sevilla"));
let tempCad=Number(prompt("dame la temperatura de Cádiz"));
let tempMal=Number(prompt("dame la temperatura de Malaga"));
let tempCicla=Number(prompt("dame la temperatura de Chiclana"));
// se agrupa las ciudades con las temperaturas en ciudades
let ciudades=[
    {ciudad:"Córdoba", temperatura : tempCord},
    {ciudad:"Sevilla", temperatura : tempSev},
    {ciudad: "Cadiz", temperatura : tempCad},
    {ciudad: "Malaga", temperatura: tempMal},
    {ciudad: "Chiclana", temperatura: tempCicla}
];
// se utiliza console.table para crear la tabla de ciudades
console.table(ciudades);