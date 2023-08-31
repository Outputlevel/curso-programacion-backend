import { Router } from "express";
import { courseModel } from "../models/courseModel.js";

const router = Router();

router.get('/', async (req, res) => {
    try {
        const courses = await courseModel.find();
        res.send({
            status: 'success',
            payload: courses
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

    const {title, description, difficulty, topics, professor, students} = req.body;

    try {
        const result = await courseModel.create({title, description, difficulty, topics, professor, students});
    
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

export default router;