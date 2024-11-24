let nombre = "Fulano";
let apellido = "Mengano";
let sueldoActual = 20000;
let porcentajeAumento = 25;

function calculoAumento(){
    var calculoAumento = (sueldoActual * porcentajeAumento) / 100;
    return calculoAumento;
}

var nuevoSueldo = calculoAumento() + sueldoActual;
console.log("Hola, estimad@ " + nombre + apellido)
console.log("En base a su sueldo actual: $" + sueldoActual)
console.log("Ha recibido un aumento del 25% :" + calculoAumento())
console.log( "y su nuevo sueldo es de:" + nuevoSueldo);