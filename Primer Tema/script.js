"use strick"
 
//el prompt sirve para preguntar algo, y si se da cancelar da null
let user= prompt("Cual es tu nombre");
if(user===null){
    alert("anonimo");
}else if (user===""){
    alert("usuario");
}else{
    alert(user);
}