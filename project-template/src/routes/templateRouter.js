import {Router} from 'express';
const router = Router();

router.get('/test', (req, res) => {
    res.send({
        status: 'success',
        payload: req.query
    });
});

router.post('/test', (req, res) => {
    res.send({
        status: 'success',
        payload: req.body
    });
});

export default router;