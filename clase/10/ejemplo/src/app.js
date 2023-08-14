import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js';
import {Server} from 'socket.io';

const app = express();

//Se inicializa el motor de plantillas
app.engine('handlebars', handlebars.engine());

//Establece la ruta de las vistas
app.set('views', __dirname + '/views');

//Establece el motor de renderizado
app.set('view engine', 'handlebars');

//Establece el servidor estático de archivos
app.use(express.static(__dirname + '/public'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', viewsRouter);

const PORT = 8080;
const httpServer = app.listen(PORT, () => {
    console.log(`Servidor arriba en el puerto ${PORT}`);
});

const socketServer = new Server(httpServer);

socketServer.on('connection', socket => {
    console.log('Nuevo cliente conectado');

    socket.on('message', data => {
        console.log(data);
    });

    socket.emit('evento_para_socket_individual', 'Este mensaje sólo lo debe recibir el socket');
    socket.broadcast.emit('evento_para_todos_menos_el_socket_actual', 'Este mensaje lo verán TODOS los sockets conectados menos el socket actual');
    socketServer.emit('evento_para_todos', 'Este mensaje lo reciben TODOS los Sockets conectados');

    //Evento personalizado
    socket.on('joaco', data => {
        console.log(data);
    });
});