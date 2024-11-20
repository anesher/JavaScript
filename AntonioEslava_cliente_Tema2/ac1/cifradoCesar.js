function cifradoCesar(frase, clave){
    const alfabeto= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
    let respuesta='';
    let letra='';

    for(let i; i<=frase.length; i++){
        letra=frase[i].toLowerCase(); // Convertimos la letra a minúscula para buscarla en el alfabeto
        if (letra===' '){
            repuesta+=' ';
        }else{
            let nuevaPosicion=frase[i]+indice;
                // Si la letra está en el alfabeto, la ciframos usando la clave
                letra = alfabeto[nuevaPosicion];
                respuesta += letra;
    }
    return respuesta;
}
}
    // Pedimos la frase al usuario
    let frase = prompt("Dame una frase que quieras cifrar");
    // Pedimos la clave al usuario y la convertimos a número
    let clave = parseInt(prompt("Dame una clave para cifrarlo"), 10);
    // Llamamos a la función de cifrado y obtenemos el resultado
    let final = cifradoCesar(frase, clave);
    // Mostramos el resultado con un alert
    alert(final);
