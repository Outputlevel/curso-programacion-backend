import { Router } from "express";
import { userModel } from "../models/userModel.js";

const router = Router();

router.get('/', async (req, res) => {
    try {
        const users = await userModel.find();
        res.send({
            status: 'success',
            payload: users
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({
            status: 'error',
            message: error.message
        });
    }
});

router.post('/', async (req, res) => {

    const {firstName, lastName, email} = req.body;

    if (!firstName || !lastName || !email) {
        return res.status(400).send({
            status: 'error',
            message: 'Incomplete values'
        });
    }

    try {
        const result = await userModel.create({
            firstName,
            lastName,
            email
        });
    
        res.status(201).send({
            status: 'success',
            payload: result
        });
    } catch (error) {
        res.status(400).send({
            status: 'error',
            message: error.message.replace(/"/g, "'")
        });
    }
});

router.put('/:id', async (req, res) => {

    const id = req.params.id;
    const {firstName, lastName, email} = req.body;

    if (!firstName || !lastName || !email) {
        return res.status(400).send({
            status: 'error',
            message: 'Incomplete values'
        });
    }

    try {
        const result = await userModel.updateOne({_id: id}, {
            firstName,
            lastName,
            email
        });
    
        res.status(200).send({
            status: 'success',
            payload: result
        });
    } catch (error) {
        res.status(400).send({
            status: 'error',
            message: error.message.replace(/"/g, "'")
        });
    }
});

router.delete('/:id', async (req, res) => {

    const id = req.params.id;

    try {
        const result = await userModel.deleteOne({_id: id});
        res.status(200).send({
            status: 'success',
            payload: result
        });
    } catch (error) {
        res.status(400).send({
            status: 'error',
            message: error.message.replace(/"/g, "'")
        });
    }
});

export default router;