import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import sessionsRouter from './routes/sessions.router.js';

const app = express();
const PORT = process.env.PORT||8080;
mongoose.connect('mongodb://127.0.0.1:27017/auth');

app.use(express.json());
app.use(cookieParser());

app.use('/api/sessions',sessionsRouter);

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
