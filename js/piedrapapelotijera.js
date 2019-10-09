let juego1 = prompt("Escoja entre piedra, papel o tijera");
console.log(juego1);
let juego2 = prompt("Escoja entre piedra, papel o tijera");
console.log(juego2);

// function resultadodejuego(juego1){
//     return "jugador 1 seleccionó"+juego1

// }

// function resultadodejuego(juego1){
//     return "jugador 2 seleccionó"+juego2
// }


if (juego1 === juego2) {
    console.log("empate")
    alert ( "empate")
}
else if (juego1=== "piedra" && juego2==="papel"){
    console. log("jugador 2 gana")
    alert ( "jugador 2 gana")
}
else if (juego1=== "papel" && juego2==="tijera"){
    console. log("jugador 2 gana")
    alert ( "jugador 2 gana")
}
else if (juego1=== "tijera" && juego2==="piedra"){
    console. log("jugador 2 gana")
    alert ( "jugador 2 gana")
}
else if (juego1=== "piedra" && juego2==="tijera"){
    console. log("jugador 1 gana")
    alert ( "jugador 1 gana")
}
else if (juego1=== "papel" && juego2==="piedra"){
    console. log("jugador 1 gana")
    alert ( "jugador 1 gana")
}
else if (juego1=== "tijera" && juego2==="papel"){
    console. log("jugador 1 gana")
    alert ( "jugador 1 gana")
}
else if()

