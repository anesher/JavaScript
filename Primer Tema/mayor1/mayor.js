"use script"


let numero1=prompt("dame un numero");
numero1=Number(numero1);
let num2=prompt("dame otro numero");
num2=Number(num2);

// Comparar los dos números
if (numero1 > num2) {
    console.log("le numero mayor ", numero1);
} else if (numero1 < num2) {
    console.log("el numero mayor ", num2);
} else {
    console.log("Ambos números son iguales.");
}
