/* 
Realizar una función que reciba un objeto con 1 solo nivel de datos, que muestre sus claves y valores en este formato: [clave, valor]. Utilizar las nuevas funciones de ES8.
*/

//Object.entries() retorna el objeto como un array de tipo [key, value]
function imprimirObjConEntries(obj) {
    console.warn("Ejemplo de Object.entries() >>>>>");

    let entries = Object.entries(obj);

    for(let entrie of entries) {
        console.log(`[${entrie[0]}, ${entrie[1]}]`);
    }
}

//Object.keys() retorna un array con las keys del objeto
//Object.values() retorna un array con los values del objeto
function imprimirObjConKeysValues(obj) {
    console.warn("Ejemplo de Object.keys() y Object.values() >>>>>");

    let keys = Object.keys(obj);
    let values = Object.values(obj);

    for (let i = 0; i < keys.length; i++) {
        console.log(`[${keys[i]}, ${values[i]}]`);
    }
}

imprimirObjConEntries(
    {
        nombre:'Daniel',
        apellido:'Sanchez',
        edad: 51,
        direccion: "Calle Falsa 123"
    }
);

imprimirObjConKeysValues(
    {
        nombre:'Daniel',
        apellido:'Sanchez',
        edad: 51,
        direccion: "Calle Falsa 123"
    }
);
