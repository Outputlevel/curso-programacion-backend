const fs = require("fs");

const generarArchivoInfo = async () => {
    try {
        //Obtengo información del archivo
        const stat = await fs.promises.stat("./package.json");
        //Leo el contenido del archivo
        const contenido = await fs.promises.readFile("./package.json", "utf-8");

        //Creo objeto info
        const info = {
            contenidoStr: contenido,
            contenidoObj: JSON.parse(contenido),
            size: stat.size
        }

        //Muestro objeto info
        console.log(info);

        //Creo info.json y lo escribo
        await fs.promises.writeFile("./info.json", JSON.stringify(info, replacer, "\t"));
    } catch (e) {
        console.error(e);
        throw new Error("Se produjo un error al crear el archivo info.json");
    }
}

generarArchivoInfo();