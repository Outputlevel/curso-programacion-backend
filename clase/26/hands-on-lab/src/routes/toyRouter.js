import {Router} from 'express';

import ToyController from '../controllers/toyController.js';

const router = Router();

const toyController = new ToyController();

router.get('/', async (req, res) => {
    const result = await toyController.getAllToys();

    res.send({
        status: 'success',
        payload: result
    });
});

router.get('/:tid', async (req, res) => {

    try {
        const result = await toyController.getToyByID(req.params.tid);
        res.send({
            status: 'success',
            payload: result
        });
    } catch (error) {
        res.status(400).send({
            status: 'error',
            message: error.message
        });
    }
});

router.post('/', async (req, res) => {
    try {
        const result = await toyController.createToy(req.body);
        res.send({
            status: 'success',
            payload: result
        });
    } catch (error) {
        res.status(400).send({
            status: 'error',
            message: error.message
        });
    }
});

export default router;