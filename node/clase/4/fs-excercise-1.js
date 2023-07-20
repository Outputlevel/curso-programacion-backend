const fs = require("fs");

console.log(">>> Inicio del programa");

let dateTime = new Date();
let year = dateTime.getFullYear();
let month = dateTime.getMonth() + 1;
let day = dateTime.getDate();
let hour = dateTime.getHours();
let min = dateTime.getMinutes();
let sec = dateTime.getSeconds();

let fechaFormateada = `${year}-${month}-${day} ${hour}:${min}:${sec}`;

fs.writeFile("./date-now.txt", fechaFormateada, (error) => {
	if (error) return console.error("Error de escritura!");

	fs.readFile("./date-now.txt", (error, contenido) => {
		if (error) return console.error("Error de lectura!");
		
		console.log(contenido.toString());
	});
});

console.log(">>> Fin del programa");
