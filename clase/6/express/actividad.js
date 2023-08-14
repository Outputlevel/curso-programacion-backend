import express from "express";

const app = express();
const port = 8080;

app.get("/bienvenida", (req, res) => {
    res.send(`<p style="color:blue;">Bienvenidos!</p>`);
});

app.get("/usuario", (req, res) => {
    res.send({
        nombre: "nombre",
        apellido: "apellido",
        edad: 125,
        correo: "correo@correo.com",
    });
});

app.listen(port, () => {
    console.log(`Listen port: ${port}`);
});
