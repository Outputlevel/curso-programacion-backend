import express from 'express';
import session from 'express-session';
import sessionRouter from './routes/sessionRouter.js';
import mongoStore from 'connect-mongo';
//import fileStore from 'session-file-store';

//const fileStorage = fileStore(session);
const app = express();

//Session Examples
app.use(session(
    {
        /*store: new fileStorage({
            path: './sessions',
            ttl: 100,
            retries: 0
        }), */
        store: mongoStore.create({
            mongoUrl: 'mongodb+srv://joaquincejas2020:Coder2023@cluster0.usycu2f.mongodb.net/?retryWrites=true&w=majority',
            mongoOptions: { useUnifiedTopology: true },
            ttl: 15
        }),
        secret: 'secretPhrase',
        resave: false,
        saveUninitialized: false
    }
));
app.use('/session', sessionRouter);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Start Server in Port ${PORT}`);
});