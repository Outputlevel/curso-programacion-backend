import express from 'express';
import mongoose from "mongoose";

import contactRouter from './routes/contactRouter.js';

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/class-28');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/contacts', contactRouter);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Start Server in Port ${PORT}`);
});