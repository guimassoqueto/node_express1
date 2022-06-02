import { Router } from 'express';

import { getAddProduct, postAddProduct } from '../controllers/addProduct.controller';

const admin_route: Router = Router();

admin_route.get('/add-product', getAddProduct);

admin_route.post('/add-product', postAddProduct);

export { admin_route } ;