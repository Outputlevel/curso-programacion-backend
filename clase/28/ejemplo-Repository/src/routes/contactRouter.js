import {Router} from 'express';
import {contactsService} from '../repositories/index.js';

const router = Router();

router.get('/', async (req, res) => {
    const contacts = await contactsService.getContacts();
    res.send({
        status: 'success',
        payload: contacts
    });
});

router.post('/', async (req, res) => {
    const result = await contactsService.createContact(req.body);
    res.send({
        status: 'success',
        payload: result
    });
});

export default router;