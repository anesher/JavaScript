"use strict"
function cifradoCesar(frase, clave) {
    let respuesta = ''; // Variable para construir el resultado.
    
    for (let i = 0; i < frase.length; i++) {
        let letra = frase[i]; // Obtenemos cada carácter de la frase.

        if (letra === ' ') {
            respuesta += ' '; // Si es un espacio, lo añadimos directamente.
        } else {
            // Obtenemos el código ASCII de la letra.
            let numeroA = frase.charCodeAt(i);
            // Calculamos el código ASCII de la letra cifrada.
            let numeroASCII = numeroA + clave;
            // Convertimos el nuevo código ASCII en letra y lo añadimos a la respuesta.
            respuesta += String.fromCharCode(numeroASCII);
        }
    }
    return respuesta; // Retornamos la frase cifrada.
}

    // Pedimos la frase al usuario
    let frase = prompt("Dame una frase que quieras cifrar");
    // Pedimos la clave al usuario y la convertimos a número
    let clave = Number(prompt("Dame una clave para cifrarlo"), 10);
    // Llamamos a la función de cifrado y obtenemos el resultado
    let final = cifradoCesar(frase, clave);
    // Mostramos el resultado con un alert
    alert(final);

/* 
Otra forma de hacerlo :
for(let i=0; i<=frase.length; i++){
    letra=frase[i].toLowerCase(); // Convertimos la letra a minúscula para buscarla en el alfabeto
    if (letra===' '){
        repuesta+=' ';
        console.log("if");
    }else{
         // Buscamos la letra en el alfabeto
         let indice = alfabeto.charCodeAt(letra);
            let f=indice+clave;
            letra=alfabeto[f];
            console.log("la letra elegida " +letra)
            respuesta += letra;
}
}
return respuesta;
}*/