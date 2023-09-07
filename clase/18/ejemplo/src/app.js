import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import cookiesRouter from './routes/cookiesRouter.js';
import sessionRouter from './routes/sessionRouter.js';

const app = express();

//Cookies Examples
app.use(cookieParser('CoderPass2023'));
app.use('/cookies', cookiesRouter);

//Session Examples
app.use(session(
    {
        secret: 'secretPhrase',
        resave: true,
        saveUninitialized: true
    }
));
app.use('/session', sessionRouter);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Start Server in Port ${PORT}`);
});