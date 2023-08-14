const fs = require("fs");

const operacionesAsincronas = async () => {
	await fs.promises.writeFile("./ejemplo-promises.txt", "¡Hola, Coders, estoy en un archivo!");

	let contenido = await fs.promises.readFile("./ejemplo-promises.txt", "utf-8");

	console.log(contenido);
	await fs.promises.appendFile('./ejemplo-promises.txt',' Más contenido');

	contenido = await fs.promises.readFile("./ejemplo-promises.txt", "utf-8");

	console.log(contenido);

	await fs.promises.unlink("./ejemplo-promises.txt");
}

console.log(">>> Inicio del programa");

operacionesAsincronas();

console.log(">>> Fin del programa");