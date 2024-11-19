"use script"

let kg = prompt("cuanto pesas");
kg=Number(kg);
console.log("tu peso en la tierra es ", kg);
let pesoLunar=kg*0.165 ;
alert("pesas en la luna "+ pesoLunar.toFixed(3));