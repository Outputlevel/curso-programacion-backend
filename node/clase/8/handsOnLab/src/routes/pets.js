import { Router } from "express";

const router = Router();

const pets = [
    {
        name: "Pepe",
        species: "Loro"
    }
];

router.get('/', (req, res) => {
    res.send(pets);
});

router.post('/', (req, res) => {
    const pet = {
        name: req.body.name ?? 'Sin Nombre',
        species: req.body.species ?? 'Sin Especie Definida'
    }

    pets.push(pet);

    res.status(201).send('Mascota creada correctamente!');
});

export default router;