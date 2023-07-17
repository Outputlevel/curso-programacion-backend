let contador = 1;

setInterval(() => {
    if (contador > 5) {
        clearInterval(1);
    }
    console.log(`Ejecutando Proceso ${contador}...`);
    contador++;
}, 2000);

async function imprimirSaludo(texto) {

    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(texto);
}

console.log(">>>>> Inicio del programa");

imprimirSaludo("Hola Coders!!"); //No bloqueante

console.log(">>>>> Fin del programa");