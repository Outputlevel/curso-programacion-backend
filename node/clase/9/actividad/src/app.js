import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';

const app = express();

//Se inicializa el motor de plantillas
app.engine('handlebars', handlebars.engine());

//Establece la ruta de las vistas
app.set('views', __dirname + '/views');

//Establece el motor de renderizado
app.set('view engine', 'handlebars');

//Establece el servidor estático de archivos
app.use(express.static('public'));

const users = [
    {
        name: "Joaquin",
        lastname: "Cejas",
        age: "29",
        email: "jcejas@gmail.com",
        phone: "124565664"
    },
    {
        name: "Dario",
        lastname: "Pacheco",
        age: "25",
        email: "dpacheco@gmail.com",
        phone: "65464351"
    },
    {
        name: "Fabio",
        lastname: "Arias",
        age: "19",
        email: "farias@gmail.com",
        phone: "859648964563"
    },
    {
        name: "Fernando",
        lastname: "Orduna",
        age: "21",
        email: "forduna@gmail.com",
        phone: "568465465"
    },
    {
        name: "Lucas",
        lastname: "Suleta",
        age: "26",
        email: "lsuleta@gmail.com",
        phone: "85694654"
    }
]

app.get('/', (req, res) => {
    const randomNumber = Math.round(Math.random() * 4); // Genera un número entero entre 0 y 4 (ambos incluidos)

    res.render(
        'index',
        users[randomNumber]
    );
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor arriba en el puerto ${PORT}`);
});