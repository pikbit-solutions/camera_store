import express from 'express'
import { getProducts, addProduct, delProduct } from '../controllers/productController.js';

const router = express.Router();

router.get('/', getProducts);
router.post('/',addProduct);
router.delete('/:id',delProduct);

export default router;