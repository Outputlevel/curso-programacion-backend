import express from 'express';
import cookieParser from 'cookie-parser';
import cookiesRouter from './routes/cookiesRouter.js';

const app = express();

app.use(cookieParser('CoderPass2023'));
app.use('/cookies', cookiesRouter);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Start Server in Port ${PORT}`);
});