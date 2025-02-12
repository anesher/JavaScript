const nombre=["antonio","felipe","manolo","Jimena"];
window.onload=()=>{
    const btn=document.getElementById("btn");
    const p=document.getElementById("nombre");
    btn.addEventListener("click",function(){
        let num=Math.floor(Math.random()*5);
        p.textContent=nombre[num];
    })
}