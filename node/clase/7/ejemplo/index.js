import express from 'express';
import UserManager from './src/UserManager.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const UM = new UserManager('./Usuarios.json');

app.get('/api/users', async (req, res) => {
    res.send(await UM.GetAllUsers());
});

app.get('/api/users/:Id', async (req, res) => {
    const response = await UM.GetUserByID(req.params.Id)
    res.status(response.code).send(response);
});

app.post('/api/users', async (req, res) => {
    res.send(await UM.CreateUser(req.body));
});

app.put('/api/users/:Id', async (req, res) => {
    res.send(await UM.UpdateUser(req.params.Id, req.body));
});

app.delete('/api/users/:Id', async (req, res) => {
    const response = await UM.DeleteUserByID(req.params.Id);
    res.status(response.code).send(response);
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor arriba en el puerto ${PORT}`);
});
