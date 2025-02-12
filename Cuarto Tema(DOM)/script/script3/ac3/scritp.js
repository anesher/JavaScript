window.onload=()=>{
    const btn=document.getElementById("btn");
    const btnC=document.getElementById("btnC");
    const st=document.styleSheets[0];
    btn.addEventListener("click",function(){
        for(let i=0;i<st.cssRules.length;i++){
            if(st.cssRules[i].selectorText===".p"){
                st.deleteRule(i);
            }
        }
    });
    btnC.addEventListener("click",function(){
        st.insertRule('.p{border:1px solid blue;background-color:green;font-size:25px}',st.cssRules.length)
        })
}