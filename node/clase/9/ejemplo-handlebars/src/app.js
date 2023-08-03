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

app.get('/', (req, res) => {
    const name = req.query.name ?? "Usuario";
    res.render(
        'index',
        {
            name: name
        }
    );
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor arriba en el puerto ${PORT}`);
});