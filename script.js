
/**
 * Esta es una función para sumar. Hola Coders!
 * @param {string} n1 
 * @param {number} n2 
 * @returns {number}
 */
function sumar(n1, n2) {
    //debugger;

    n1 = n1 + 3;
    n2 *= 4;
    let result = (n1 + n2) * 2;
    
    if (result > 10) {
        return "Es mayor a 10";
    }

    return "No es mayor a 10!"
}


console.log(sumar(2, 3));