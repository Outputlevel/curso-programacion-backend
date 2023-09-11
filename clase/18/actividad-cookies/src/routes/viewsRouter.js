import {Router} from 'express';

const router = Router();

router.get("/", async (req, res) => {
    res.render(
        'index',
        {
            title: "Clase 18",
            style: "index.css"
        }
    );
});

export default router;