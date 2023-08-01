import express from 'express';
import routerUsers from './routes/users.js';
import routerPets from './routes/pets.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

//Use routers
app.use('/api/users', routerUsers);
app.use('/api/pets', routerPets);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor arriba en el puerto ${PORT}`);
});