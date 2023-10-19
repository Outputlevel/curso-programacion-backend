import express from 'express';
import usersRouter from './routes/usersRouter.js';
import ordersRouter from './routes/ordersRouter.js';
import businessRouter from './routes/businessRouter.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/users', usersRouter);
app.use('/api/business', businessRouter);
app.use('/api/orders', ordersRouter);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Start Server in Port ${PORT}`);
});