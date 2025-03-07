const nombre = document.querySelector('input');
const saludo = document.getElementsByTagName("h2")[0]; 
window.onload = function () {
    nombre.addEventListener('blur', guardar);
    const valor = mostrar("username");
    if (valor) {
        saludo.textContent = '¡Hola, ' + valor + '!';
    }
};

function guardar() {
    document.cookie = "username=" + nombre.value + ";max-age=86400;path=/"; // La cookie expira en 1 día
    saludo.textContent = '¡Hola, ' + nombre.value + '!';
}

function mostrar(clave) {
    let cookieArray = document.cookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let parClaveValor = cookieArray[i].split('=');
        if ( clave== parClaveValor[0].trim()) {
            return parClaveValor[1];
        }
    }
    return null;
}