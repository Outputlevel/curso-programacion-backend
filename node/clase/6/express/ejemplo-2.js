import express from 'express';

const app = express();

//Ruta, route o endpoint
app.get('/saludo', (req, res) => {
    res.send('Hola a todos los coders, pero ahora desde express!');
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor arriba en el puerto ${PORT}`);
});
