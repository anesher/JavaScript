/*
Crea un formulario html con un campo de entrada para un nombre de usuario. 
Agrega un botón que al hacer clic guarde el nombre del usuario en localStorage.
Añade otro botón que recupere y muestre ese nombre en un div cuando se cargue la página. 
*/
const btnG = document.getElementById("guardar");
const btnB = document.getElementById("borrar");
const form = document.querySelector("form");
const nombre = document.getElementById("username");
const div = document.querySelector("div");
console.log(btnB, btnG, form, nombre, div);

window.onload = function() {
    const usuario = localStorage.getItem("usuario");
    if (usuario) {
        div.textContent = "Hola " + usuario;
    }

    btnG.addEventListener("click", function() {
        guardar();
    });

    btnB.addEventListener("click", function() {
        borrar();
    });

    function guardar() {
        const usuario = nombre.value;
        if (usuario) {
            localStorage.setItem("usuario", usuario);
            div.textContent = "Hola " + usuario;
        } else {
            div.textContent = "";
        }
    }

    function borrar() {
        localStorage.removeItem("usuario");
        div.textContent = "No hay ninguno guardado";
    }
}