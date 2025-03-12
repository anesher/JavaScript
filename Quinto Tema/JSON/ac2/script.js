"use strict";

const objJson=`{
  "evento": "Concierto de Rock",
  "lugar": "Auditorio Ciudad",
  "fecha": "2025-09-15",
  "asistentes": 300
}`;

let JSONData=JSON.parse(objJson);
JSONData.asistentes= 350;
JSONData.disponible=true;
console.log(JSONData.parseInt(JSON.stringify(JSONData)));