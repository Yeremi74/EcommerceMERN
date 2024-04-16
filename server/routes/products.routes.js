import { Router } from 'express';
import {
  createProducts,
  deleteProducts,
  getProductsCategory,
  getProducts,
  getUniqueProduct,
  updateProducts,
  Filters,
  filterProductsByName,
} from '../controllers/products.controller.js';
const router = Router();

router.get('/api/products/:cat/:collec/:sort', Filters);
router.get('/api/products', getProducts);
router.get('/api/products/catalog/:name', filterProductsByName);
router.get('/api/products/category/:cat', getProductsCategory);
router.post('/api/products', createProducts);
router.put('/api/products/:id', updateProducts);

router.delete('/api/products/:id', deleteProducts);
router.get('/api/products/:id', getUniqueProduct);

export default router;
