import {Router} from 'express';
import jwt from 'jsonwebtoken';

const router = Router();

router.get("/login", logged, async (req, res) => {

    res.render(
        'login',
        {
            title: "Login",
            style: "index.css"
        }
    );
});

router.get("/register", logged, async (req, res) => {

    res.render(
        'register',
        {
            title: "Registro",
            style: "index.css"
        }
    );
});

function logged(req, res, next) {
    const cookie = req.cookies['coderCookie']

    if (cookie) {
        const user = jwt.verify(cookie,'tokenSecretJWT');
        if (user) return res.send('Usuario logueado!');
    }

    next();
}

export default router;