import express from 'express';
import { addLogger } from './utils/loggerCustom.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(addLogger);

app.get('/', (req, res) => {
    req.logger.warning('Alerta!!');
    res.send({
        message: '¡Prueba Logger!'
    });
});

app.post('/test', (req, res) => {
    res.send({
        message: '¡Prueba Logger!'
    });
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Start Server in Port ${PORT}`);
});