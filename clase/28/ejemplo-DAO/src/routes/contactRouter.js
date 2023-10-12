import {Router} from 'express';
import Contacts from '../dao/memory/contactsMemory.js';

const router = Router();
const contactsService = new Contacts();

router.get('/', async (req, res) => {
    const contacts = await contactsService.get();
    res.send({
        status: 'success',
        payload: contacts
    });
});

export default router;