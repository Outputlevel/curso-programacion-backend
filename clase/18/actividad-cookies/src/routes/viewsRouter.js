import {Router} from 'express';

const router = Router();

router.get("/", async (req, res) => {
    res.render(
        'index',
        {
            title: "Clase 18"
        }
    );
});

export default router;