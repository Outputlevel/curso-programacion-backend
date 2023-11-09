import express from 'express';

import cluster from 'cluster';
import { cpus } from 'os';

const Procesadores = cpus().length;

if (cluster.isPrimary) {
    console.log('Proceso primario, generando proceso trabajador...');
    for (let i = 0; i < Procesadores; i++) {
        cluster.fork();
    }
} else {
    console.log('Al ser un proceso forkeado, no cuento como primario (isPrimary=false) ¡Soy un Worker!');
    console.log(`Me presento, soy un Worker con el ID: ${process.pid}`);

    const app = express();

    app.get('/operacionsencilla', (req, res) => {
        let sum = 0;
        for (let i = 0; i < 1000000; i++) {
            sum += i;
        }
        res.send({
            status: 'success',
            message: `El Worker ${process.pid} ha atendido esta petición, el resultado es ${sum}`
        });
    });
    
    app.get('/operacioncompleja', (req, res) => {
        let sum = 0;
        for (let i = 0; i < 5e8; i++) {
            sum += i;
        }
        res.send({
            status: 'success',
            message: `El Worker ${process.pid} ha atendido esta petición, el resultado es ${sum}`
        });
    });

    app.listen(8080, () => console.log('Listening on Port 8080'));
}