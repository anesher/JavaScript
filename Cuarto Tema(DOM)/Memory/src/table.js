import { carta } from "./carta.js";

const divTable = document.getElementById("juego");
const btn = document.getElementById("btn");
const divMain = document.getElementById("inicio");
const divPrincipal = document.getElementById("pantalla_principal");
const audio=document.getElementById("audio");

// Inicialmente ocultar los div de juego e inicio
divTable.style.display = "none";
divMain.style.display = "none";

document.body.style.display = "flex";
document.body.style.height = "100vh"; // Asegurarse de que el body ocupe toda la altura de la ventana

divPrincipal.style.width = "100vw"; // 100% del ancho de la ventana
divPrincipal.style.height = "100vh"; // 100% de la altura de la ventana
divPrincipal.style.backgroundImage = "url('./imagenes/portada.png')"; // Ruta a tu imagen
divPrincipal.style.backgroundSize = "cover"; // Asegurarse de que la imagen cubra todo el div
divPrincipal.style.backgroundPosition = "center"; // Centrar la imagen
divPrincipal.style.backgroundRepeat = "no-repeat"; // Evitar que la imagen se repita

divMain.style.width = "50vw"; // 50% del ancho de la ventana
divMain.style.height = "100vh"; // 100% de la altura de la ventana
divMain.style.background = "black";

divTable.style.width = "50vw"; // 50% del ancho de la ventana
divTable.style.height = "100vh"; // 100% de la altura de la ventana


btn.addEventListener("click", function() {
    // Ocultar el div principal
    divPrincipal.style.display = "none";
    
    // Mostrar los div de juego e inicio
    divTable.style.display = "block";
    divMain.style.display = "block";

    // Reproducir la canción
    audio.play();

    // Crear la tabla
    const table = document.createElement("table");
    table.style.border = "1px solid black";
    table.style.width = "100%";
    table.style.height = "100%";

    let cartaIndex = 0;

    for (let i = 0; i < 4; i++) {
        let tr = document.createElement("tr");
        tr.style.border = "1px solid black";

        for (let j = 0; j < 4; j++) {
            let td = document.createElement('td');
            td.style.width = "25%";
            td.style.height = "25%";
            td.style.border = "1px solid black";
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    divTable.appendChild(table);
});

