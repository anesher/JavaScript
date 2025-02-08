class MenuJuego {
    constructor() {
        this.menuDiv = document.createElement("div");
        this.menuDiv.id = "menu-juego";
        this.menuDiv.style.display = "flex";
        this.menuDiv.style.flexDirection = "column";
        this.menuDiv.style.alignItems = "center";
        this.menuDiv.style.justifyContent = "center";
        this.menuDiv.style.width = "100%";
        this.menuDiv.style.height = "100%";
        this.menuDiv.style.position = "relative";
        this.menuDiv.style.background = "white"; // Fondo blanco
        
        this.contador = document.createElement("div");
        this.contador.id = "contador";
        this.contador.style.color = "black";
        this.contador.style.fontSize = "2rem";
        this.contador.style.marginTop = "20px";
        this.contador.innerText = "03:30";
        
        this.imagen = document.createElement("img");
        this.imagen.src = "./imagenes/menu.jpg";
        this.imagen.id = "imagen-menu";
        this.imagen.style.width = "150px";
        this.imagen.style.height = "150px";
        
        this.menuDiv.appendChild(this.imagen);
        this.menuDiv.appendChild(this.contador);
        
        const inicioDiv = document.getElementById("inicio");
        if (inicioDiv) {
            inicioDiv.appendChild(this.menuDiv);
        } else {
            console.error("No se encontró el div #inicio para agregar el menú.");
        }
        
        this.tiempoRestante = 210;
        
        // Crear un único div para mostrar frases
        this.mensajeDiv = document.createElement("div");
        this.mensajeDiv.style.position = "absolute";
        this.mensajeDiv.style.bottom = "20%";
        this.mensajeDiv.style.color = "black";
        this.mensajeDiv.style.fontSize = "1.5rem";
        this.mensajeDiv.style.textAlign = "center";
        this.mensajeDiv.style.backgroundColor = "white";
        this.mensajeDiv.style.border = "3px solid black"; // Borde negro estilo cómic
        this.mensajeDiv.style.padding = "10px";
        this.mensajeDiv.style.borderRadius = "10px";
        this.mensajeDiv.style.boxShadow = "5px 5px 0px black"; // Efecto bocadillo
        this.mensajeDiv.style.maxWidth = "80%";
        this.mensajeDiv.style.wordWrap = "break-word";
        this.menuDiv.appendChild(this.mensajeDiv);
        
        this.frases = [
            { tiempo: 210, mensaje: "¡TOO POR IGUAL VALIENTES, A ESTAAA ESSS!" },
            { tiempo: 180, mensaje: "¡IZQUIERDA ALANTE DERECHA ATRAS!" },
            { tiempo: 150, mensaje: "¡SIEMPRE GANANDOLE UNA UÑITA!" },
            { tiempo: 120, mensaje: "¡LLAMATE MANUEL!" },
            { tiempo: 90, mensaje: "¡HECHANDOLE CASTA HAY ABAJO!" },
            { tiempo: 60, mensaje: "¡QUE BONITO LO HACEIS MIS COSTALEROS, COMO SE NOTA QUE VENIS DE CORAZON!" },
            { tiempo: 30, mensaje: "¡CUIDADO CON LA CALLE QUE SE VENCE AL COSTERO DERECHO!" },
            { tiempo: 10, mensaje: "¡VAMOS A TERMINAR ESTA CHICOTA COMO DIOS MANDA!" }
        ];

        this.mostrarMensaje(this.frases[0].mensaje);
        this.iniciarContador();
    }

    iniciarContador() {
        this.intervalo = setInterval(() => {
            this.tiempoRestante--;
            let minutos = Math.floor(this.tiempoRestante / 60);
            let segundos = this.tiempoRestante % 60;
            this.contador.innerText = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
            
            this.frases.forEach(frase => {
                if (frase.tiempo === this.tiempoRestante) {
                    this.mostrarMensaje(frase.mensaje);
                }
            });

            if (this.tiempoRestante <= 0) {
                clearInterval(this.intervalo);
                alert("¡Tiempo agotado!");
            }
        }, 1000);
    }

    mostrarMensaje(mensaje) {
        this.mensajeDiv.innerText = mensaje; // Reemplazar el texto del div en lugar de crear nuevos
    }
}

export default MenuJuego;
