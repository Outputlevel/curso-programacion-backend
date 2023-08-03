import express from 'express';
import handlebars from 'express-handlebars';
//import routerUsers from './routes/users.js';
import __dirname from './utils.js';

const app = express();

//app.use(express.json());
//app.use(express.urlencoded({extended: true}));

//Se inicializa el motor de plantillas
app.engine('handlebars', handlebars.engine({
    defaultLayout: false
}));

//Establece la ruta de las vistas
app.set('views', __dirname + '/views');

//Establece el motor de renderizado
app.set('view engine', 'handlebars');

//Establece el servidor estático de archivos
app.use(express.static('public'));

//Utiliza las rutas definidas
//app.use('/users', routerUsers);
let food = [
    {name:"Hamburguesa", price: "100"},
    {name:"Banana", price: "20"},
    {name:"Soda", price: "40"},
    {name:"Ensalada", price: "120"},
    {name:"Pizza", price: "150"}
];

app.get('/', (req, res)=>{
    let testUser = {
        name: "Hilda",
        last_name:"Martinez",
        role: "admin"
    }

    res.render(
        'index',
        {
            user: testUser,
            isAdmin: testUser.role === "admin",
            food
        }
    );
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor arriba en el puerto ${PORT}`);
});