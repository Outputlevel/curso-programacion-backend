import {Router} from 'express';
import auth from '../middlewares/auth.js';

const router = Router();

router.get("/", (req, res) => {
    
    let username = req.session.user ? req.session.user : '';
    if (req.session.counter) {
        req.session.counter++;
        res.send(`${username} Visitaste el sitio ${req.session.counter} veces.`);
    } else {
        req.session.counter = 1;
        res.send(`Bienvenido ${username}!`);
    }
});

router.get("/logout", (req, res) => {
    req.session.destroy( error => {
        if (!error) res.send('Logout ok!');
        else res.send({status: 'Logout ERROR', body: error});
    });
});

router.get("/login", auth, (req, res) => {
    res.send(`login success ${req.session.user}!`);
});

export default router;