"use script"

let numero=prompt("dame un numero");
numero=Number(numero);

console.time("operacion 1");
numero=(numero*1000)%500 *8888;
console.timeEnd("operacion 1");

console.time("operacion 2");
for (let i; i>10; i++){}
console.timeEnd("operacion 2");