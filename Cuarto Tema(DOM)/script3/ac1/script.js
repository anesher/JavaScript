const btn=document.getElementById("btn");

window.onload=()=>{
btn.addEventListener("click",function(){
        const div=document.styleSheets[0];
        for(let i=0;i<div.cssRules.length;i++){
            if(div.cssRules[i].selectorText==='.div'){
                div.cssRules[i].style.background="yellow";
                div.cssRules[i].style.setProperty('font-size','10px');
            }
        }

    }
)
}