import { Carta } from "./carta.js";
import MenuJuego from "./MenuJuego.js";

const divTable = document.getElementById("juego");
const btn = document.getElementById("btn");
const divMain = document.getElementById("inicio");
const divPrincipal = document.getElementById("pantalla_principal");
const audio = document.getElementById("audio");
const dificultadSelect = document.getElementById("dificultad");

let nivel, numCartas, cartasVolteadas, paresEncontrados, movimientos, intervaloJuego;
let menuJuego;

function reiniciarJuego() {
    clearInterval(intervaloJuego);
    divTable.innerHTML = "";
    cartasVolteadas = [];
    paresEncontrados = 0;
    movimientos = 0;
    
    if(menuJuego) {
        menuJuego.actualizarMovimientos(0);
        menuJuego.tiempoRestante = 210;
        menuJuego.contador.textContent = "03:30";
        clearInterval(menuJuego.intervalo);
        menuJuego.iniciarContador();
    }
    
    iniciarJuego();
}

function mostrarVictoria() {
    const modal = document.createElement("div");
    modal.className = "modal-victoria";
    modal.innerHTML = `
        <h2>¡Has ganado!</h2>
        <p>Tiempo: ${menuJuego.contador.textContent}</p>
        <p>Movimientos: ${movimientos}</p>
        <button id="reiniciarBtn" class="btn-cofrade" style="margin-top: 1rem;">Reiniciar Juego</button>
    `;

    document.body.appendChild(modal);
    
    document.getElementById("reiniciarBtn").addEventListener("click", () => {
        modal.remove();
        reiniciarJuego();
    });
}

function crearTablero(cartas) {
    const table = document.createElement("table");
    table.style.width = "100%";
    table.style.height = "100%"; // Ajuste de altura
    table.style.margin = "0 auto";
    table.style.tableLayout = "fixed";

    let cartaIndex = 0;
    // Ajuste dinámico del tamaño basado en nivel
    const tamanoCelda = nivel === 4 ? "25%" : "16.66%";

    for (let i = 0; i < nivel; i++) {
        const tr = document.createElement("tr");
        tr.style.height = tamanoCelda; // Altura proporcional
        
        for (let j = 0; j < nivel; j++) {
            const td = document.createElement("td");
            td.style.width = tamanoCelda;
            td.style.height = tamanoCelda;
            td.style.textAlign = "center";
            td.style.padding = "2px";
            td.style.boxSizing = "border-box";

            if (cartaIndex >= cartas.length) {
                tr.appendChild(td);
                continue;
            }

            const carta = cartas[cartaIndex++];
            const cartaDiv = document.createElement("div");
            cartaDiv.className = "carta";

            const cartaInner = document.createElement("div");
            cartaInner.className = "carta-inner";

            const frente = document.createElement("img");
            frente.className = "carta-frente";
            frente.src = carta.imagen;

            const dorso = document.createElement("img");
            dorso.className = "carta-dorso";
            dorso.src = "./imagenes/trasera.png";

            cartaInner.appendChild(frente);
            cartaInner.appendChild(dorso);
            cartaDiv.appendChild(cartaInner);
            td.appendChild(cartaDiv);
            tr.appendChild(td);

            cartaDiv.addEventListener("click", function() {
                if (cartasVolteadas.length < 2 && !cartaDiv.classList.contains("volteada")) {
                    movimientos++;
                    menuJuego.actualizarMovimientos(movimientos);
                    cartaDiv.classList.add("volteada");
                    cartasVolteadas.push(cartaDiv);

                    if (cartasVolteadas.length === 2) {
                        const [carta1, carta2] = cartasVolteadas;
                        if (carta1.querySelector(".carta-frente").src === carta2.querySelector(".carta-frente").src) {
                            cartasVolteadas = [];
                            paresEncontrados++;
                            
                            if (paresEncontrados === numCartas) {
                                clearInterval(intervaloJuego);
                                setTimeout(mostrarVictoria, 500);
                            }
                        } else {
                            setTimeout(() => {
                                carta1.classList.remove("volteada");
                                carta2.classList.remove("volteada");
                                cartasVolteadas = [];
                            }, 1000);
                        }
                    }
                }
            });
        }
        table.appendChild(tr);
    }
    divTable.appendChild(table);
}

function iniciarJuego() {
    nivel = dificultadSelect.value === "dificil" ? 6 : 4;
    numCartas = (nivel * nivel) / 2;
    
    const juego = new Carta(nivel);
    const cartas = juego.carta.slice(0, numCartas * 2);
    
    divTable.innerHTML = "";
    divTable.style.width = "100%";
    crearTablero(cartas);
}

if (divTable && btn && divMain && divPrincipal && audio && dificultadSelect) {
    divTable.style.display = "none";
    divMain.style.display = "none";

    document.body.style.display = "flex";
    document.body.style.height = "100vh";

    divPrincipal.style.width = "100vw";
    divPrincipal.style.height = "100vh";
    divPrincipal.style.backgroundImage = "url('./imagenes/portada.png')";
    divPrincipal.style.backgroundSize = "cover";
    divPrincipal.style.backgroundPosition = "center";

    btn.addEventListener("click", function() {
        divPrincipal.style.display = "none";
        divTable.style.display = "block";
        divMain.style.display = "block";
        audio.play();
        menuJuego = new MenuJuego();
        reiniciarJuego();
    });
}