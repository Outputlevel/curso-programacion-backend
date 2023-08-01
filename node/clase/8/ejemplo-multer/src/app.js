import express from 'express';
import routerUsers from './routes/users.js';

const app = express();

app.use(express.json());
//app.use(express.urlencoded({extended: true}));

app.use('/api/user', routerUsers);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor arriba en el puerto ${PORT}`);
});