"use script"

const carta=[];

for(let i=1;i<=8;i++){
    carta.push(i,i);
}
carta.sort(()=>Math.random()- 0.5);

export{carta};