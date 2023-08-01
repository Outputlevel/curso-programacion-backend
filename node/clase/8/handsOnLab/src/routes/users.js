import { Router } from "express";
import { uploader } from "../utils.js";

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

router.post('/', uploader.single('file'), (req, res) => {

    if (!req.file) {
        return res.status(400).send("No se pudo guardar la imagen");
    }

    console.log(req.file);
    
    const user = {
        name: req.body.name ?? 'Sin Nombre',
        course: req.body.course ?? 'Sin Curso',
        profile: req.file.path
    }

    users.push(user);

    res.status(201).send('Usuario creado correctamente!');
});

export default router;