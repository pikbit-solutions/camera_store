import express from 'express'
import { getProducts, addProduct, delProduct, updateProduct, getSpecific, getAvilCount, getSoldCount, getTotalRev, sellProduct } from '../controllers/productController.js';

const router = express.Router();

router.get('/', getProducts);
router.post('/',addProduct);
router.patch('/:id', updateProduct);
router.delete('/:id',delProduct);
router.patch('/sell/:id',sellProduct)
router.get('/product/:id', getSpecific);
router.get('/avilcount', getAvilCount);
router.get('/soldcount', getSoldCount);
router.get('/totalrev', getTotalRev);

export default router;