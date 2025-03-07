const btn=document.querySelectorAll("button");

btn[0].addEventListener("click",function(){
    document.cookie="tema=green;max-age=86400;path=/";
    document.body.style.backgroundColor="green";
})
btn[1].addEventListener("click",function(){
    document.cookie="tema=blue;max-age=86400;path=/";
    document.body.style.backgroundColor="blue";

})
btn[2].addEventListener("click", function(){
    document.cookie="tema=red;max-age=86400;path=/";
    document.body.style.backgroundColor="red";
})
function guardar() {
    document.cookie = "tema=" + btn.value + ";max-age=86400;path=/"; // La cookie expira en 1 día
}

function getCookie(name) {
    let cookieArr = document.cookie.split(";");
    for (let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");
        if (name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

function aplicarTema() {
    let tema = getCookie("tema");
    if (tema) {
        document.body.style.backgroundColor = tema;
    }
}

window.onload = aplicarTema;