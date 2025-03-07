class MenuJuego {
    constructor() {
        this.menuDiv = document.createElement("div");
        this.menuDiv.id = "menu-juego";
        this.menuDiv.style.position = "fixed";
        this.menuDiv.style.top = "0";
        this.menuDiv.style.left = "0";
        this.menuDiv.style.right = "0";
        this.menuDiv.style.background = "rgba(0, 0, 0, 0.8)";
        this.menuDiv.style.padding = "1.5rem 1rem";
        this.menuDiv.style.zIndex = "1000";
        this.menuDiv.style.display = "flex";
        this.menuDiv.style.justifyContent = "space-around";
        this.menuDiv.style.alignItems = "center";
        this.menuDiv.style.minHeight = "80px";

        this.contadoresDiv = document.createElement("div");
        this.contadoresDiv.style.display = "flex";
        this.contadoresDiv.style.gap = "2rem";
        this.contadoresDiv.style.alignItems = "center";

        this.contador = document.createElement("div");
        this.contador.id = "contador";
        this.contador.style.color = "#d4af37";
        this.contador.style.fontSize = "1.7rem";
        this.contador.textContent = "03:30";

        this.movimientosContador = document.createElement("div");
        this.movimientosContador.id = "movimientos";
        this.movimientosContador.style.color = "#d4af37";
        this.movimientosContador.style.fontSize = "1.7rem";
        this.movimientosContador.textContent = "Movimientos: 0";

        this.contadoresDiv.appendChild(this.contador);
        this.contadoresDiv.appendChild(this.movimientosContador);
        this.menuDiv.appendChild(this.contadoresDiv);

        document.body.appendChild(this.menuDiv);
        
        this.tiempoRestante = 210;
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

        this.iniciarContador();
    }

    iniciarContador() {
        this.intervalo = setInterval(() => {
            this.tiempoRestante--;
            let minutos = Math.floor(this.tiempoRestante / 60);
            let segundos = this.tiempoRestante % 60;
            this.contador.textContent = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
            
            this.frases.forEach(frase => {
                if (frase.tiempo === this.tiempoRestante) {
                    this.mostrarMensaje(frase.mensaje);
                }
            });

            if (this.tiempoRestante <= 0) {
                clearInterval(this.intervalo);
                this.mostrarMensaje("¡Tiempo agotado!");
                setTimeout(() => alert("¡Tiempo agotado!"), 100);
            }
        }, 1000);
    }

    actualizarMovimientos(movimientos) {
        this.movimientosContador.textContent = `Movimientos: ${movimientos}`;
    }

    mostrarMensaje(mensaje) {
        if (!this.mensajeDiv) {
            this.mensajeDiv = document.createElement("div");
            this.mensajeDiv.style.position = "fixed";
            this.mensajeDiv.style.bottom = "100px";
            this.mensajeDiv.style.left = "50%";
            this.mensajeDiv.style.transform = "translateX(-50%)";
            this.mensajeDiv.style.color = "white";
            this.mensajeDiv.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
            this.mensajeDiv.style.padding = "15px 30px";
            this.mensajeDiv.style.borderRadius = "8px";
            this.mensajeDiv.style.fontSize = "1.2rem";
            document.body.appendChild(this.mensajeDiv);
        }
        this.mensajeDiv.textContent = mensaje;
        setTimeout(() => this.mensajeDiv.textContent = "", 5000);
    }
}

export default MenuJuego;