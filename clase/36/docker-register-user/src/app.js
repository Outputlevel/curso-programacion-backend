import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import handlebars from 'express-handlebars';

import sessionsRouter from './routes/sessions.router.js';
import viewsRouter from './routes/views.router.js';
import __dirname from './utils/index.js';

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

const PORT = process.env.PORT || 8080;
mongoose.connect(process.env.MONGO_URL);

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/../views`);
app.set('view engine', 'handlebars');

app.use(express.json());

app.use('/', viewsRouter);
app.use('/api/sessions',sessionsRouter);

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
