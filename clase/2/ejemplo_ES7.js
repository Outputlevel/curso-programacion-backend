/*
Dados los siguientes arrays:
    '6**2'
    '**'
    '3**3'
    '4**'
    '4**5'
    '8**2**'
    '4*=5'

Realizar una función reciba un array y devuelva el resultado de la operación potenciación en caso de poder realizarla. De no ser posible, devuelva null.
Se deberá detectar si el array incluye un ** y tiene un número a cada lado. En ese caso, realizar la operación de potenciación del número localizado a la izquierda del ** elevado al exponente que indica el número de la derecha. Utilizar funciones de ES7: includes y **
*/

function calculoPotencia(dataString) {
    if(dataString.includes('**')) {
        let numeros = dataString.split('**')
        if(numeros.length == 2 && numeros[0] && numeros[1]) {
            return numeros[0]**numeros[1]
        }
        else return null
    }
    else return null
}

console.log('6**2', calculoPotencia('6**2'))
console.log('**', calculoPotencia('**'))
console.log('3**3', calculoPotencia('3**3'))
console.log('4**', calculoPotencia('4**'))
console.log('4**5', calculoPotencia('4**5'))
console.log('8**2**', calculoPotencia('8**2**'))
console.log('4*=5', calculoPotencia('4*=5'))
