"use strick"

// para generar un numero aleatorio
let aleatorio=Math.floor(Math.random()*10)+1;
aleatorio=Number(aleatorio);
for(i=0;i<3;i++){
    let numero1= prompt("elige un numero");
    numero1=Number(numero1);
    if(numero1===aleatorio){
        alert("Has acertado");
    }else if (i===2){
        console.warn;
    }
}
