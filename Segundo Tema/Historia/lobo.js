function* aventuraInteractiva() {
    let eleccion1 = yield "Es una noche fría en la aldea de Elmswood. La luna llena brilla en lo alto, iluminando las casas de madera y los árboles que rodean la aldea. Hoy se celebra el famoso Juego de los Hombres Lobo, un evento nocturno donde aldeanos y hombres lobo se enfrentan en una lucha de astucia y engaño. Nadie sabe quién es quién. Cada uno de ustedes tiene un rol secreto, y el objetivo es sobrevivir hasta el amanecer o eliminar a todos los enemigos.\n\n" +
        "Te encuentras en la plaza central, rodeado de aldeanos que murmuran entre sí. El moderador, un hombre encapuchado, te dice que es hora de comenzar. La primera ronda empieza: es de noche, y todos deben cerrar los ojos.\n\n" +
        "¿Qué haces cuando el moderador te dice que cierres los ojos?\n" +
        "Opción A: Cierras los ojos y te quedas en silencio, esperando a escuchar las instrucciones.\n" +
        "Opción B: Tratas de espiar a los demás jugadores, buscando alguna pista.";

    if (eleccion1 === "A") {
        let eleccion2 = yield "Te mantienes tranquilo, escuchando atentamente. El moderador comienza a hablar en voz baja, ordenando a los hombres lobo que abran los ojos y elijan a su primera víctima. Puedes sentir la tensión en el aire, pero te concentras en escuchar.\n\n" +
            "Tras un largo rato, el moderador te indica que es hora de abrir los ojos. Ahora, debes ser astuto.\n" +
            "Opción A: Acusas a Elara, la joven aldeana que ha estado mirando nerviosamente a todos.\n" +
            "Opción B: Acusas a Thorne, el viejo ermitaño que siempre parece saber más de lo que debería.";

        if (eleccion2 === "A") {
            let eleccion3 = yield "Tu acusación se siente arriesgada, pero Elara parece demasiado nerviosa para ser completamente inocente. El moderador te pide que des tu razonamiento. Con firmeza, dices que has notado que, durante la ronda nocturna, Elara no cerró los ojos rápidamente como el resto de los aldeanos. El moderador revela que Elara es, de hecho, una aldeana. Todos los demás murmuran, y te sientes momentáneamente culpable. ¿Habrá sido tu acusación correcta o caerás en la trampa de los hombres lobo?\n\n" +
                "Opción A: Tratas de calmar a los demás, intentando ganar su confianza.\n" +
                "Opción B: Comienzas a cuestionar a otros jugadores, buscando a alguien más a quien acusar.";

            if (eleccion3 === "A") {
                yield "Intentas ganar su confianza, pero los jugadores te dan una nueva oportunidad. Lo que no saben es que han caído en la peor trampa: confiar en el mismo lobo.";
            } else {
                yield "Te ven como una amenaza que solo intenta culpar a los demás, por lo tanto te mandan a matar.";
            }
        } else {
            let eleccion4 = yield "Tu acusación se siente segura, pero el problema es que Thorne sabe demasiadas cosas. Empieza a sacar los trapos sucios y a poner a Dios por testigo de que tú eres el lobo.\n\n" +
                "Opción A: Te pones a llorar.\n" +
                "Opción B: Lo empiezas a injuriar, llamándole mentiroso y ruin.";

            if (eleccion4 === "A") {
                yield "Los aldeanos te creen por tu corta edad y por tus lágrimas. Mandan a matar a Thorne y, por dentro, te sientes feliz porque queda poco para la noche. La matanza va a empezar";
            } else {
                yield "Los aldeanos no te creen y te mandan a matar, pero no se han dado cuenta de que es pronto para la noche, y te conviertes en hombre lobo. La matanza comienza.";
            }
        }
    } else {
        let eleccion2 = yield "Decides espiar a los demás. No puedes evitar sentir curiosidad sobre las reacciones de los otros jugadores. Cuando el moderador da la señal para que todos cierren los ojos, observas cuidadosamente a aquellos que tienen la mirada inquieta o gestos extraños. Ves a Elara, la joven aldeana, mirándote con un brillo en los ojos que te desconcierta.\n\n" +
            "El moderador te indica que es hora de abrir los ojos.\n\n" +
            "Opción A: Actúas como un aldeano inocente, tratando de mantener un perfil bajo y no llamar la atención.\n" +
            "Opción B: Decides jugar agresivamente, acusando a los demás con confianza, incluso si no estás seguro.";

        if (eleccion2 === "B") {
            yield "Decides jugar a lo grande. Acusas sin piedad a Thorne, el ermitaño, por su comportamiento extraño. A pesar de que no tienes pruebas sólidas, algo en su mirada te hace sospechar. El moderador te permite exponer tu acusación. Dices con firmeza que Thorne sabe demasiado sobre las reglas del juego y se comporta como si estuviera controlando a los demás. El moderador, después de un tenso silencio, revela que Thorne es, efectivamente, uno de los hombres lobo. La aldea respira aliviada, y aunque has logrado eliminar a un hombre lobo, ahora todos te miran con más respeto.";
        } else {
            yield "Por tu falta de agresividad, los hombres lobo se aprovechan de ti y mueres.";
        }
    }
}

const aventura = aventuraInteractiva();
console.log(aventura.next().value);
console.log(aventura.next(prompt("Elige A o B")).value);
console.log(aventura.next(prompt("Elige A o B")).value);
console.log(aventura.next(prompt("Elige A o B")).value);
console.log(aventura.next(prompt("Elige A o B")).value);
