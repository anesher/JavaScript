let respuesta;
let xhr = new XMLHttpRequest();

function peticion() {
    xhr.open("GET", "https://api.thedogapi.com/v1/images/search", true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            respuesta = JSON.parse(xhr.responseText);
            // Muestra los datos en consola
            const imagen = respuesta[0].url;
            const img = document.createElement('img');
            img.setAttribute('src', imagen);
            
            // Elimina la imagen anterior si existe
            const existingImg = document.querySelector('img');
            if (existingImg) {
                existingImg.remove();
            }

            document.body.appendChild(img);
        }
    };
}

const btn = document.getElementById('btn');
const div = document.getElementById('div');
btn.addEventListener('click', function() {
    peticion();
});