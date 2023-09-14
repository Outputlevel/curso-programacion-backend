import express from 'express';
import session from 'express-session';
import mongoose from "mongoose";
import mongoStore from 'connect-mongo';
import handlebars from 'express-handlebars';
import passport from 'passport';

import userRouter from './routes/userRouter.js';
import __dirname from './utils/constantsUtil.js';
import initializatePassport from './config/passportConfig.js';

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/../views`);
app.set('view engine', 'handlebars');

const uri = 'mongodb://127.0.0.1:27017/class-20';
mongoose.connect(uri);

//Session
app.use(session(
    {
        store: mongoStore.create({
            mongoUrl: uri,
            mongoOptions: { useUnifiedTopology: true },
            ttl: 100
        }),
        secret: 'secretPhrase',
        resave: false,
        saveUninitialized: false
    }
));

initializatePassport();
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/sessions', userRouter);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Start Server in Port ${PORT}`);
});