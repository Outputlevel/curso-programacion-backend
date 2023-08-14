const fs = require("fs");

console.log(">>> Inicio del programa");

fs.writeFile("./ejemplo-async.txt", "¡Hola, Coders, estoy en un archivo!", (error) => {
	if (error) return console.error("Error de escritura!");

	fs.readFile("./ejemplo-async.txt", (error, contenido) => {
		if (error) return console.error("Error de lectura!");
		
		console.log(contenido.toString());

		fs.appendFile('./ejemplo-async.txt',' Más contenido', (error) => {
			if (error) return console.error("Error al agregar contenido!");

			fs.readFile("./ejemplo-async.txt", (error, contenido) => {
				if (error) return console.error("Error de lectura!");
				
				console.log(contenido.toString());

				fs.unlink("./ejemplo-async.txt", (error) => {
					if (error) return console.error("Error al eliminar el archivo!");
				});
			});
		});
	});
});

console.log(">>> Fin del programa");