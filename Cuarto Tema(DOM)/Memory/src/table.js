import { Carta } from "./carta.js"; 
import MenuJuego from "./MenuJuego.js";


const divTable = document.getElementById("juego");
const btn = document.getElementById("btn");
const divMain = document.getElementById("inicio");
const divPrincipal = document.getElementById("pantalla_principal");
const audio = document.getElementById("audio");

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

let cartasVolteadas = [];
let paresEncontrados = 0;

btn.addEventListener("click", function () {
    divPrincipal.style.display = "none";
    divTable.style.display = "block";
    divMain.style.display = "block";
    audio.play();
    new MenuJuego();


    const table = document.createElement("table");
    table.style.width = "75%";
    table.style.height = "100%";
    table.style.borderCollapse = "collapse";
    table.style.marginLeft = "10%";
    
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
            
            let carta = cartas[cartaIndex];
            let cartaDiv = document.createElement("div");
            cartaDiv.classList.add("carta");
            
            let cartaInner = document.createElement("div");
            cartaInner.classList.add("carta-inner");
            
            let frente = document.createElement("img");
            frente.classList.add("carta-frente");
            frente.src = carta.imagen;
            
            let dorso = document.createElement("img");
            dorso.classList.add("carta-dorso");
            dorso.src = "./imagenes/trasera.png";
            
            cartaInner.appendChild(frente);
            cartaInner.appendChild(dorso);
            cartaDiv.appendChild(cartaInner);
            td.appendChild(cartaDiv);
            tr.appendChild(td);
            
            cartaDiv.addEventListener("click", function () {
                if (cartasVolteadas.length < 2 && !cartaDiv.classList.contains("volteada")) {
                    cartaDiv.classList.add("volteada");
                    cartasVolteadas.push(cartaDiv);
                }
                
                if (cartasVolteadas.length === 2) {
                    let [carta1, carta2] = cartasVolteadas;
                    if (carta1.querySelector(".carta-frente").src === carta2.querySelector(".carta-frente").src) {
                        cartasVolteadas = [];
                        paresEncontrados++;
                    } else {
                        setTimeout(() => {
                            carta1.classList.remove("volteada");
                            carta2.classList.remove("volteada");
                            cartasVolteadas = [];
                        }, 1000);
                    }
                }
            });
            
            cartaIndex++;
        }
        table.appendChild(tr);
    }
    divTable.appendChild(table);
});
