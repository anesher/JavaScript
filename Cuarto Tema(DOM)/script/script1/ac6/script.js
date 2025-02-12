const btn=document.getElementById('boton');
const p=document.querySelector('p');
p.style.backgroundColor="white";
btn.addEventListener("click",function(){
    if(p.style.backgroundColor=="white"){
        p.style.backgroundColor="black";
    }else{
        p.style.backgroundColor="white";
    }
})