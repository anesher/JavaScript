"use strict"

/*
Escribe un programa que compruebe si un array de números es un palíndromo (es decir, que se lee igual de
izquierda a derecha que de derecha a izquierda). Si es palíndromo, imprime
"Es un palíndromo", de lo contrario, imprime "No es un palíndromo".
*/
let array=new Array(1,2,3,4,4,3,2,1);
console.log(array);
let arrayT=[...array];

array.reverse();
console.log(arrayT);

let value=false;

for(let i=0;i<=array.length;i++){
    if(arrayT.toString()===array.toString()){
        value=true;
    } 
}

if(value){
    console.log("es palindromo");
}else{
    console.log("no es palindromo");
}
/*array.reverse();
console.log(arrayT);

if(array.toString()===arrayT.toString()){
    console.log("es palindromo");
}else{
    console.log("no es palindromo");
}*/ 
