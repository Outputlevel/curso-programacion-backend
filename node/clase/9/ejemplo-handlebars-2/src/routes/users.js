import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.render(
        'index',
        {
            title: "Hola Mundo",
            body: "test"
        }
    )
});

export default router;