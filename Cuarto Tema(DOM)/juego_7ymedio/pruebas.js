const formulario = document.querySelector("form");
const btn = document.getElementsByTagName("button")[0];
const user = document.querySelector(".usuario");
const errorUser = document.getElementById("errorUser");
const edad = document.querySelector("[name='edad']");
const errorEdad = document.getElementById("errorEdad");
const tablero = document.getElementById("tablero");
const botonCarta = document.getElementById("botonCarta");
const botonPlantarse = document.getElementById("botonMePlanto");
const tableroPuntos = document.getElementById("tableroPuntos");
const carta=document.querySelector(".baraja");

let regexUser = /^[a-zA-Z||1-9]{6,}$/;
let regexEdad = /^[0-9]{2}$/;

//crear el array de barajas
let baraja=[];
let palos=["oros","copas","espadas","bastos"];
let numeros=["1","2","3","4","5","6","7","10","11","12"];

// para generar la baraja en el array no ponerla de una en una sino con un bucle
for (let palo of palos){
    for (let numero of numeros){
        baraja.push(`./imagenes/baraja/${palo}_${numero}.jpg`);
    }
}
//metodo sort para desordenar la baraja
baraja.sort(()=>Math.random()-0.5);

// guardar el valor de cada carta


document.addEventListener("DOMContentLoaded", function () {

    let regexUser = /^[a-zA-Z1-9]{6,}$/;
    let regexEdad = /^[0-9]{2}$/;

    edad.addEventListener('keydown', function (event) {
        if (isNaN(event.key) && event.key !== "Backspace") {
            event.preventDefault();
            console.log("no están permitidas letras");
        }
    });

    user.addEventListener("blur", () => {
        validarInput(user, regexUser);
    });

    edad.addEventListener("blur", () => {
        if (edad.value < 18 || edad.value > 99) {
            errorEdad.textContent = "Edad no permitida";
            edad.focus();
        } else {
            errorEdad.textContent = '';
        }
    });

    btn.addEventListener("click", function (e) {
        let valido = validarInput(user, regexUser);
        let edadvalido = validarInput(edad, regexEdad);
        if (valido && edadvalido) {
            tablero.style.visibility = "visible";
          
            let h2 = document.createElement("h2");
            h2.textContent = "Puntuacion ";
            h2.classList.add("text-center");
            tablero.prepend(h2);

            let input = document.createElement("input");
            input.setAttribute("readonly", true); 
            tableroPuntos.appendChild(input);


            let btnCarta = document.createElement("button");
            let btnPlantarse = document.createElement("button");

            btnCarta.textContent = "Jugar";
            btnPlantarse.textContent = "Plantarse";

            btnCarta.classList.add("btn", "btn-primary");
            btnPlantarse.classList.add("btn", "btn-danger");

            botonCarta.appendChild(btnCarta);
            botonPlantarse.appendChild(btnPlantarse);

            let nuevaCarta=document.createElement("img");
            nuevaCarta.src="./imagenes/cartaVuelta.jpg";
            carta.appendChild(nuevaCarta);

            btnCarta.addEventListener("click",function(){
                nuevaCarta.style.visibility="hidden";
                let carta=baraja.pop();
                nuevaCarta.src=carta;
                nuevaCarta.style.visibility="visible";

            });
        } else {
            e.preventDefault();
        }
    });

    function validarInput(input, regex) {
        if (!regex.test(input.value)) {
            if (input === user) {
                errorUser.textContent = "Formato inválido para " + input.name;
            } else if (input === edad) {
                errorEdad.textContent = "Formato inválido para " + input.name;
            }
            input.focus();
            return false;
        }
        if (input === user) {
            errorUser.textContent = '';
        } else if (input === edad) {
            errorEdad.textContent = '';
        }
        return true;
    }
    
}); 