"use strict";

// Definición de la función generadora 'aventuraInteractiva'
function* aventuraInteractiva() {
    let eleccion1 = yield "Es una noche fría en la aldea de Elmswood. La luna llena brilla en lo alto, iluminando las casas de madera y los árboles que rodean la aldea. Hoy se celebra el famoso Juego de los Hombres Lobo, un evento nocturno donde aldeanos y hombres lobo se enfrentan en una lucha de astucia y engaño. Nadie sabe quién es quién. Cada uno de ustedes tiene un rol secreto, y el objetivo es sobrevivir hasta el amanecer o eliminar a todos los enemigos.\n\n" +
        "¿Qué haces cuando el moderador te dice que cierres los ojos?\n" +
        "A: Cierras los ojos y te quedas en silencio.\n" +
        "B: Tratas de espiar a los demás jugadores.";

    if (eleccion1 === "A") {
        let eleccion2 = yield "Te mantienes tranquilo, escuchando atentamente. El moderador indica que los hombres lobo deben elegir a su víctima.\n\n" +
            "¿A quién acusas al abrir los ojos?\n" +
            "A: Acusas a Elara, la joven aldeana.\n" +
            "B: Acusas a Thorne, el viejo ermitaño.";

        if (eleccion2 === "A") {
            yield "El moderador revela que Elara es una aldeana. Los demás te miran con desconfianza, pero la noche aún no termina.";
            return;
        } else {
            yield "Thorne se defiende con furia, pero los aldeanos lo eliminan. La aldea ha perdido un sabio.";
            return;
        }
    } else {
        let eleccion2 = yield "Decides espiar a los demás. Observas a Elara con un brillo extraño en sus ojos.\n\n" +
            "¿Qué decides?\n" +
            "A: Mantienes un perfil bajo.\n" +
            "B: Acusas agresivamente a alguien más.";

        if (eleccion2 === "B") {
            yield "Acusas a Thorne con seguridad, y para sorpresa de todos, es un hombre lobo. Has ganado respeto en la aldea.";
            return;
        } else {
            yield "Tu indecisión te hace parecer sospechoso, y los aldeanos te eliminan.";
            return;
        }
    }
}

// Código para manejar la historia y el recuadro
const aventura = aventuraInteractiva();
const storyBox = document.getElementById("story-box");
const storyText = document.getElementById("story-text");
const buttonsContainer = document.getElementById("buttons");

// Muestra la primera parte de la historia
function mostrarHistoria(resultado) {
    storyText.textContent = resultado.value;

    // Si el generador ha terminado, muestra el final y oculta los botones
    if (resultado.done) {
        buttonsContainer.innerHTML = "";
        const botonFin = document.createElement("button");
        botonFin.textContent = "Fin";
        botonFin.onclick = () => alert("Gracias por jugar");
        buttonsContainer.appendChild(botonFin);
        return;
    }

    // Si la historia continúa, muestra las opciones
    buttonsContainer.innerHTML = "";
    ["A", "B"].forEach((opcion) => {
        const button = document.createElement("button");
        button.textContent = `Opción ${opcion}`;
        button.onclick = () => avanzarHistoria(opcion);
        buttonsContainer.appendChild(button);
    });
}

// Avanza en la historia según la elección
function avanzarHistoria(eleccion) {
    const resultado = aventura.next(eleccion);
    mostrarHistoria(resultado);
}

// Inicia el juego
mostrarHistoria(aventura.next());
