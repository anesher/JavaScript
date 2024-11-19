"use strick"

let numero1=prompt("numero 1");

let numero2=prompt("numero 2");

numero1= Number(numero1);
numero2=Number(numero2);

if(!isNaN(numero1)&&!isNaN(numero2)){
    console.log(numero1+numero2);
}else{
    console.error("error");
}
