
window.onload=()=>{
    const btn=document.getElementById("btn");
    const st=document.styleSheets[0];
    btn.addEventListener("click",function(){
        for(let i=0;i<st.cssRules.length;i++){
            if(st.cssRules[i].selectorText==="h1"){
                st.cssRules[i].style.setProperty('text-align','left');
                st.cssRules[i].style.setProperty('background-color','green');
            }else if(st.cssRules[i].selectorText===".div"){
                st.cssRules[i].style.setProperty("font-size","25px");
                st.cssRules[i].style.setProperty("background-color","green");
            }else{
                st.cssRules[i].style.setProperty("background-color","red");
            }
        } 
    });

}