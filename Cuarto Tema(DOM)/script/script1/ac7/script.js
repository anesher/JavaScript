const btn=document.getElementById('boton');
const p=document.getElementById('p');
let cont=0;

btn.addEventListener("click",function(){
    cont++;
    p.innerHTML=`<p>Clicks: ${cont}</p>`;
});