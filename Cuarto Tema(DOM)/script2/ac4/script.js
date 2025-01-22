const btn = document.getElementById('boton');
const ul = document.querySelector('ul');

btn.addEventListener("click", function() {
    const li = ul.lastElementChild;
    ul.insertBefore(li, ul.firstElementChild); 
});