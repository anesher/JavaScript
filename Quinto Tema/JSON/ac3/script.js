"use strict";
const JSONCiud=`{
  "ciudades": [
    {"nombre": "Madrid", "temperatura": 32},
    {"nombre": "Oslo", "temperatura": 13},
    {"nombre": "Bogotá", "temperatura": 20}
  ]
}`;
const ciudad=JSON.parse(JSONCiud);

ciudad.ciudades.forEach((ciudad)=>{
    if(ciudad.temperatura>25){
        console.log(`La ciudad de ${ciudad.nombre} tiene una temperatura de ${ciudad.temperatura}ºC`);
    }
});