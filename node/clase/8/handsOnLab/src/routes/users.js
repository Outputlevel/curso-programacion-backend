import { Router } from "express";

const router = Router();

const users = [
    {
        name: "Joaco",
        course: "Programación Backend"
    }
];

router.get('/', (req, res) => {
    res.send(users);
});

router.post('/', (req, res) => {
    const user = {
        name: req.body.name ?? 'Sin Nombre',
        course: req.body.course ?? 'Sin Curso'
    }

    users.push(user);

    res.status(201).send('Usuario creado correctamente!');
});

export default router;