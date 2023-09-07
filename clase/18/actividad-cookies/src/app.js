import express from 'express';
import cookieParser from 'cookie-parser';
import handlebars from 'express-handlebars';
import cookiesRouter from './routes/cookiesRouter.js';
import viewsRouter from './routes/viewsRouter.js';
import __dirname from './utils/constantsUtil.js';

const app = express();

app.use(cookieParser('CoderPass2023'));

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/../views`);
app.set('view engine', 'handlebars');

app.use('/cookies', cookiesRouter);
app.use('/', viewsRouter);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Start Server in Port ${PORT}`);
});