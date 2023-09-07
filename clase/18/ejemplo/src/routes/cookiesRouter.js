import {Router} from 'express';

const router = Router();

router.get("/getCookies", (req, res) => {
    res.send({
        cookies: req.cookies,
        signedCookies: req.signedCookies
    });
});

router.get("/setCookies", (req, res) => {
    res.cookie(
        'CoderCookie',
        'Esta cookie es Full Power!!',
        {maxAge: 50000, signed: true}
    ).send('Se guardo la Cookie');
});

router.get("/deleteCookie", (req, res) => {
    const cookie = 'CoderCookie';
    res.clearCookie(cookie).send(`Se elimino la cookie ${cookie}`);
});

export default router;