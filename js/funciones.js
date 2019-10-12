console.log("calculadora");


    

// let menu =prompt(`
// 1-sumar
// 2-restar
// 3-multiplicar
// 4-dividir
// `)



let x =prompt("digite su primer valor")

let y =prompt("digite su segundo valor")

function sumar(x,y) {
    return (parseInt(x) + parseInt(y))
}

function resta(x,y) {
    return (parseInt(x) - parseInt(y))
}

function multiplicar(x,y) {
    return (parseInt(x) * parseInt(y))
}

function dividir(x,y) {
    return (parseInt(x) / parseInt(y))
}

document.write("la suma es " + sumar(x,y) + "<br/>");

document.write("la resta es " + resta(x,y)+ "<br/>");

document.write("la multiplicacion es " + multiplicar(x,y) + "<br/>");

document.write("la division es " + dividir (x,y) );

