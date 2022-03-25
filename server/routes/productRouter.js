import express from 'express'
import { getProducts, addProduct, delProduct, updateProduct } from '../controllers/productController.js';

const router = express.Router();

router.get('/', getProducts);
router.post('/',addProduct);
router.patch('/:id', updateProduct)
router.delete('/:id',delProduct);

export default router;