import {Router} from 'express';
import { getBussiness, getBussinessById, createBusiness, addProduct } from '../controllers/businessController.js';

const router = Router();

router.get('/', getBussiness);
router.post('/', createBusiness);

router.get('/:bid', getBussinessById);
router.put('/:bid/product', addProduct);

export default router;