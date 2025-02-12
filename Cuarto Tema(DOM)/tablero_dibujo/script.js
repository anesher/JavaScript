document.addEventListener("DOMContentLoaded", function () {
    const zonadibujo = document.getElementById("zonadibujo");
    const paleta = document.getElementById("paleta");
    const pincelEstado = document.getElementById("pincel");

    let colorActivo = "";
    let pincelActivo = false;

    const tabla = document.createElement("table");

    for (let i = 0; i < 40; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < 40; j++) {
            const td = document.createElement("td");
            td.style.width = "15px";
            td.style.height = "15px";
            td.style.border = "1px solid #ccc"; 
            td.style.backgroundColor = "white";

            td.addEventListener("mousemove", function (e) {
                if (pincelActivo && colorActivo) {
                    e.target.style.backgroundColor = colorActivo;
                }
            });

            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }

    zonadibujo.appendChild(tabla);

    paleta.addEventListener("click", function (e) {
        if (e.target.matches("td")) {
            colorActivo = getComputedStyle(e.target).backgroundColor;
            pincelEstado.style.backgroundColor = colorActivo;
            pincelEstado.textContent = "Pincel activo";
        }
    });

    zonadibujo.addEventListener("mousedown", function () {
        pincelActivo = true;
    });

    zonadibujo.addEventListener("mouseup", function () {
        pincelActivo = false;
    });

    zonadibujo.addEventListener("mouseleave", function () {
        pincelActivo = false;
    });
});