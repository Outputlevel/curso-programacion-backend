import express from 'express';
import mongoose from "mongoose";

import userRouter from './routes/userRouter.js';
import toyRouter from './routes/toyRouter.js';

const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/arquitectura-test');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/users', userRouter);
app.use('/api/toys', toyRouter);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Start Server in Port ${PORT}`);
});