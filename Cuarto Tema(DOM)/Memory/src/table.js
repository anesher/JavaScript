import { Carta } from "./carta.js"; // Asegúrate de que la clase está bien exportada/importada

const divTable = document.getElementById("juego");
const btn = document.getElementById("btn");
const divMain = document.getElementById("inicio");
const divPrincipal = document.getElementById("pantalla_principal");
const audio = document.getElementById("audio");

// Inicialmente ocultar los div de juego e inicio
divTable.style.display = "none";
divMain.style.display = "none";

document.body.style.display = "flex";
document.body.style.height = "100vh";

divPrincipal.style.width = "100vw";
divPrincipal.style.height = "100vh";
divPrincipal.style.backgroundImage = "url('./imagenes/portada.png')";
divPrincipal.style.backgroundSize = "cover";
divPrincipal.style.backgroundPosition = "center";
divPrincipal.style.backgroundRepeat = "no-repeat";

divMain.style.width = "50vw";
divMain.style.height = "100vh";
divMain.style.background = "black";

divTable.style.width = "50vw";
divTable.style.height = "100vh";

btn.addEventListener("click", function () {
    // Ocultar el div principal
    divPrincipal.style.display = "none";

    // Mostrar los div de juego e inicio
    divTable.style.display = "block";
    divMain.style.display = "block";

    // Reproducir la canción
    audio.play();

    // Crear la tabla
    const table = document.createElement("table");
    table.style.width = "75%";
    table.style.height = "100%";
    table.style.borderCollapse = "collapse"; // Para eliminar los espacios entre celdas
    table.style.marginLeft="10%";
    

    // Generar cartas
    const juego = new Carta();
    let cartas = juego.carta;
    let cartaIndex = 0;

    for (let i = 0; i < 4; i++) {
        let tr = document.createElement("tr");


        for (let j = 0; j < 4; j++) {
            let td = document.createElement("td");
            td.style.width = "25%";
            td.style.height = "25%";
            td.style.textAlign = "center";
            td.style.padding = "0"; 
            
            let img = document.createElement("img");
            img.src = './imagenes/trasera.png'; 
            img.style.width = "70%";
            img.style.height = "80%";
            img.style.objectFit = "justify"; 
            
            td.appendChild(img);
            tr.appendChild(td);
            cartaIndex++;
        }

        table.appendChild(tr);
    }

    divTable.appendChild(table);
});
