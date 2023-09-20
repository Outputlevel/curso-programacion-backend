import {Router} from 'express';

const router = Router();

router.get('/', (req, res) => {

    res.render(
        'index',
        {
            title: 'Template',
            style: 'index.css',
            script: 'index.js',
            user: {
                first_name: 'Joaco',
                last_name: 'Cejas',
                email: 'jcejas@test.com',
                age: 29
            }
        }
    );
});

export default router;