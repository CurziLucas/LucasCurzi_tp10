let num1 = 15
let num2 = 20

function suma(num1, num2){
    let resultado = num1 + num2;
    return resultado;
}

let rdoSuma = suma(15, 20);
console.log("el resultado es: " + rdoSuma);

function resta(num1, num2){
    let resultado = num1 - num2;
    return resultado;
}

let rdoResta = resta(15, 20);
console.log("el resultado es: " + rdoResta);

function multiplicacion(num1, num2){
    let resultado = num1 * num2;
    return resultado;
}

let rdoMultiplicacion = multiplicacion(15, 20);
console.log("el resultado es: " + rdoMultiplicacion);

function division(num1, num2){
    let resultado = num1 / num2;
    return resultado;
}

let rdoDivision = division(15, 20);
console.log("el resultado es: " + rdoDivision);

function modulo(num1, num2){
    let resultado = num1 % num2;
    return resultado;
}

let rdoModulo = modulo(15, 20);
console.log("el resultado es: " + rdoModulo);

    if(num1 > num2){
        console.log("El primer numero es mayor que el segundo")
    }else{
        console.log("El segundo numero es mayor que el primero")
    }
