const btn=document.getElementById('btn');
const div=document.querySelector('div');

btn.addEventListener('click',()=>{
    div.childNodes
    for(let i=0;div.childNodes.length;i++){
        console.log(div.childNodes[i].nodeType)
        if(div.childNodes[i].nodeType===8){
            console.log("Esto es un comentatio");
        }
    }
    console.log("Son :" +i);
});