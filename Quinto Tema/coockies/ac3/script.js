const comida = document.querySelector("select");
const receta = document.querySelectorAll('p')[0];
const mensaje = document.querySelector('body > p');
const recetasDiv = document.querySelector('div');
const clearCookieCheckbox = document.querySelector('input[name="clearCookie"]');

window.onload = function() {
    const ingrediente = mostrar('ingrediente');
    if (ingrediente) {
        mensaje.textContent = `Bienvenido amante del ${ingrediente}, hoy te recomendamos estas recetas`;
        ordenarRecetas(ingrediente);
    }

    comida.addEventListener("change", function() {
        document.cookie = `ingrediente=${comida.value}; path=/`;
        location.reload();
    });

    clearCookieCheckbox.addEventListener("change", function() {
        if (clearCookieCheckbox.checked) {
            document.cookie = "ingrediente=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            location.reload();
        }
    });
}

function mostrar(clave) {
    let cookieArray = document.cookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let parClaveValor = cookieArray[i].split('=');
        if (clave == parClaveValor[0].trim()) {
            return parClaveValor[1];
        }
    }
    return null;
}

function ordenarRecetas(ingrediente) {
    const recetas = Array.from(recetasDiv.children);
    const recetasConIngrediente = recetas.filter(receta => receta.textContent.includes(ingrediente));
    const otrasRecetas = recetas.filter(receta => !receta.textContent.includes(ingrediente));

    recetasDiv.innerHTML = '';
    recetasConIngrediente.forEach(receta => recetasDiv.appendChild(receta));
    otrasRecetas.forEach(receta => recetasDiv.appendChild(receta));
}