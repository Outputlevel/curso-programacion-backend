import { Router } from "express";
import { studentModel } from "../models/studentModel.js";

const router = Router();

router.get('/', async (req, res) => {
    try {
        const students = await studentModel.find();
        res.send({
            status: 'success',
            payload: students
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({
            status: 'error',
            message: error.message
        });
    }
});

router.get('/:uid', async (req, res) => {
    try {
        const uid = req.params.uid;

        //const students = await studentModel.find({ _id: uid }).populate('courses.course');
        const students = await studentModel.find({ _id: uid });

        res.send({
            status: 'success',
            payload: students
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

    const {first_name, last_name, email, gender, courses} = req.body;

    try {
        const result = await studentModel.create({first_name, last_name, email, gender, courses});
    
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
    const {first_name, last_name, email, gender, courses} = req.body;

    try {
        const student = await studentModel.find({_id: id});
        if (!student) {
            throw new Error('Student not found');
        }

        const newStudent = {
            first_name: first_name ?? student.first_name,
            last_name: last_name ?? student.last_name,
            email: email ?? student.email,
            gender: gender ?? student.gender,
            courses: courses ?? student.courses
        }

        const result = await studentModel.updateOne({_id: id}, newStudent);
    
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
        const result = await studentModel.deleteOne({_id: id});
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