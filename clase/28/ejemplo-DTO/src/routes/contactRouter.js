import {Router} from 'express';
const router = Router();

router.get('/test', (req, res) => {
    res.send({
        status: 'success',
        payload: req.query
    });
});

export default router;