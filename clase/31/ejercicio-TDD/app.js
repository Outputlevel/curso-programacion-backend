const login = (user, password) => {
    let result = 'logueado';
    if (!password) {
        result = 'No se ha proporcionado un password';
    } else {
        if (password !== '123') result = 'Contraseña incorrecta';
    }
    if (!user) {
        result = 'No se ha proporcionado un usuario';
    } else {
        if (user !== 'coderUser') result = 'Credenciales incorrectas';
    }
    
    return result;
}

//Escenarios
let testsPasados = 0;
let testsCount = 1;

let result;
let expected;

// Test 1
expected = "No se ha proporcionado un password";
console.log(`Test ${testsCount}: Si se pasa un password vacío, la función debe retornar ${expected}`);

result = login('coderUser', undefined);

if (result === expected) {
    console.log(`Test ${testsCount} pasado!`);
    testsPasados++;
} else console.log(`Test ${testsCount} no pasado, se recibió ${result}, pero se esperaba ${expected}`);
testsCount++;

console.log("---------------------------------");

// Test 2
expected = "No se ha proporcionado un usuario";
console.log(`Test ${testsCount}: Si se pasa un usuario vacío, la función debe retornar ${expected}`);

result = login(undefined, '123');

if (result === expected) {
    console.log(`Test ${testsCount} pasado!`);
    testsPasados++;
} else console.log(`Test ${testsCount} no pasado, se recibió ${result}, pero se esperaba ${expected}`);
testsCount++;

console.log("---------------------------------");

// Test 3
expected = "Contraseña incorrecta";
console.log(`Test ${testsCount}: Si se pasa un password incorrecto, la función debe retornar ${expected}`);

result = login('coderUser', 'test');

if (result === expected) {
    console.log(`Test ${testsCount} pasado!`);
    testsPasados++;
} else console.log(`Test ${testsCount} no pasado, se recibió ${result}, pero se esperaba ${expected}`);
testsCount++;

console.log("---------------------------------");

// Test 4
expected = "Credenciales incorrectas";
console.log(`Test ${testsCount}: Si se pasa un usuario incorrecto, la función debe retornar ${expected}`);

result = login('userTest', '123');

if (result === expected) {
    console.log(`Test ${testsCount} pasado!`);
    testsPasados++;
} else console.log(`Test ${testsCount} no pasado, se recibió ${result}, pero se esperaba ${expected}`);
testsCount++;

console.log("---------------------------------");

// Test 5
expected = "logueado";
console.log(`Test ${testsCount}: Si el usuario y contraseña coinciden, la función debe retornar ${expected}`);

result = login('coderUser', '123');

if (result === expected) {
    console.log(`Test ${testsCount} pasado!`);
    testsPasados++;
} else console.log(`Test ${testsCount} no pasado, se recibió ${result}, pero se esperaba ${expected}`);

console.log("---------------------------------");

if (testsCount === testsPasados) {
    console.log("Todos los tests han pasado con éxito!");
} else {
    console.log(`Se pasaron ${testsPasados} tests de un total de ${testsCount}`);
}