"use script"
// se pide los el que mano quieres jugar, se pone numeros para que sea muchos mas facil
let movimiento1= Number(prompt("elije un movimiento de piedra, papel o tijera; sabiendo que piedra es 1, papel es 2 y tijera 3"));
// se utiliza el Math.floor(Math.random()*3)+1 para que la maquina coja un numero aleatorio entre tres sabiendo que
//sabiendo que piedra es 1, papel es 2 y tijera 3
let movimiento2= Number(Math.floor(Math.random()*3)+1);

    // se utiliza una condicional para saber todas las posibilidades o jugadas que tiene este juego y como serian el resultado 
    // de cada una, teniendo hasta 9 posibilidades de jugada.
    if(movimiento2 ===1 && movimiento1===1 ){
        console.log("la maquina ha utilizado esto " +movimiento2);
        alert("has empatado");
        }else if (movimiento2 ===2 && movimiento1===1){
            console.log("la maquina ha utilizado esto " +movimiento2);
            alert("pierdes");
        }else if (movimiento2===3 && movimiento1 ===1){
            console.log("la maquina ha utilizado esto " +movimiento2);
            alert("ganas");
        }else if (movimiento2===1 && movimiento1===2){
            console.log("la maquina ha utilizado esto " +movimiento2);
            alert ("ganas");
        }else if (movimiento2===2 && movimiento1===2){
            console.log("la maquina ha utilizado esto " +movimiento2);
            alert("empatas")
        }else if (movimiento2===3 && movimiento1===2){
            console.log("la maquina ha utilizado esto " +movimiento2);
            alert("pierdes");
        }else  if (movimiento2===1 && movimiento1===3){
            console.log("la maquina ha utilizado esto " +movimiento2);
            alert("ganas");
        }else if (movimiento2===2  && movimiento1===3){
            console.log("la maquina ha utilizado esto " +movimiento2);
            alert("pierdes");
        }else if (movimiento === 3  && movimiento1===3){
            console.log("la maquina ha utilizado esto " +movimiento2);
            alert("empatas");
            // se utiliza uno ultimo por si no introduces bien un numero del 1 al 3; ya que estos tres estan recogidos ya arriba 
        }else{
             alert("introduce bien las posibilidades");
     }

