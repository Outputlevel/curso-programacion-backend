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

router.post('/', async (req, res) => {

    const {nombre, apellido, edad, dni, curso, nota} = req.body;

    try {
        const result = await studentModel.create({nombre, apellido, edad, dni, curso, nota});
    
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
    const {nombre, apellido, edad, dni, curso, nota} = req.body;

    try {
        const student = await studentModel.find({_id: id});

        const updateStudent = {};

        if (student.length > 0) {
            updateStudent.nombre = nombre ? nombre : student.nombre;
            updateStudent.apellido = apellido ? apellido : student.apellido;
            updateStudent.edad = edad ? edad : student.edad;
            updateStudent.dni = dni ? dni : student.dni;
            updateStudent.curso = curso ? curso : student.curso;
            updateStudent.nota = nota ? nota : student.nota;
        } else {
            throw Error('Undefined student');
        }

        const result = await studentModel.updateOne({_id: id}, updateStudent);
    
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