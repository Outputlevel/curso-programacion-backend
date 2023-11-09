import { Router } from 'express';
import { fakerDE as faker } from '@faker-js/faker';

const router = Router();

router.get('/user', (req, res) => {
    res.send({
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password()
    });
});

export default router;