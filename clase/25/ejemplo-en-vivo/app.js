function listNumbers(...numbers) {

    let error = false;
    let types = [];
    numbers.forEach((item) => {
        if (isNaN(parseFloat(item))) error = true;

        types.push(typeof item);
    });

    if (error) {
        console.error('Invalid parameters', types);
        process.exit(-4);
    }

    console.log(numbers);
}

process.on('exit', code => {
    if (code === -4) console.log('Proceso finalizado por argumentación inválida en una función');
});

listNumbers(3, 45, 23);
listNumbers(1, 4, false, 'hola');