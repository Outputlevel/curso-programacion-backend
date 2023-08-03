import express from 'express';
import handlebars from 'express-handlebars';
//import routerUsers from './routes/users.js';
import __dirname from './utils.js';

const app = express();

//app.use(express.json());
//app.use(express.urlencoded({extended: true}));

//Se inicializa el motor de plantillas
app.engine('handlebars', handlebars.engine());

//Establece la ruta de las vistas
app.set('views', __dirname + '/views');

//Establece el motor de renderizado
app.set('view engine', 'handlebars');

//Establece el servidor estático de archivos
app.use(express.static('public'));

//Utiliza las rutas definidas
//app.use('/users', routerUsers);

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