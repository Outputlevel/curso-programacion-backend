/*
- Definiremos una función llamada operación que reciba como parámetro dos valores y una función con la operación que va a realizar. Deberá retornar el resultado.

- Definiremos las siguientes funciones: suma, resta, multiplicación, división y módulo. Estas recibirán dos valores y devolverán el resultado. Serán pasadas como parámetro en la llamada a la función operación

- Todas las funciones tendrán que ser realizadas con sintaxis flecha.
*/

const operacion = (n1, n2, func) => {
    console.log(`Los numeros ingresados son ${n1} y ${n2}`);
    
    return func(n1, n2);
}

const suma = (n1, n2) => {
    return n1 + n2;
}

const resta = (n1, n2) => {
    return n1 - n2;
}

const multiplicacion = (n1, n2) => {
    return n1 * n2;
}

const division = (n1, n2) => {
    return n1 / n2;
}

//Resto de una division
const modulo = (n1, n2) => {
    return n1 % n2;
}

console.log(operacion(2, 3, suma));
console.log(operacion(5, 2, resta));
console.log(operacion(2, 4, multiplicacion));
console.log(operacion(12, 3, division));
console.log(operacion(15, 4, modulo));
