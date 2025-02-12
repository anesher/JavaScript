const btn=document.getElementById('btn');
const div=document.querySelector('div');
const p=document.querySelector('p');

btn.addEventListener('click',function(){
    let nuevop=document.createElement('p');
    nuevop.textContent=p.textContent;
    div.prepend(nuevop);
});
