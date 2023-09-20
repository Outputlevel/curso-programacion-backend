import express from 'express';
import templateRouter from './routes/templateRouter.js';
import viewsRouter from './routes/viewsRouter.js';
import __dirname from './utils/constantsUtil.js';
import handlebars from 'express-handlebars';

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/../views`);
app.set('view engine', 'handlebars');

app.use('/', viewsRouter);
app.use('/api/template', templateRouter);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Start Server in Port ${PORT}`);
});