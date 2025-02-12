const rojo = document.getElementById("rojo");
const verde = document.getElementById("verde");
const amarillo = document.getElementById("amarillo");

const tiempos = {
    1: 10000,
    2: 500,
    3: 15000,
};

function semaforo(estado) {
    switch (estado) {
        case 1:
            rojo.style.background = 'red';
            amarillo.style.background = '';
            verde.style.background = '';
            break;
        case 2:
            rojo.style.background = '';
            amarillo.style.background = '';
            verde.style.background = 'green';
            break;
        case 3:
            rojo.style.background = '';
            amarillo.style.background = 'yellow';
            verde.style.background = '';
            break;
        default:
            rojo.style.background = '';
            amarillo.style.background = '';
            verde.style.background = '';
            break;
    }
}

// Función para cambiar el estado del semáforo automáticamente
function iniciarSemaforo() {
    let estado = 1;
    setInterval(() => {
        semaforo(estado);
        estado = estado === 3 ? 1 : estado + 1;
    }, tiempos[estado]);
}

// Iniciar el semáforo
iniciarSemaforo();