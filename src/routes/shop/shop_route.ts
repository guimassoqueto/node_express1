import { Router } from 'express';
import { getShopAllProducts } from '../../controllers/shop/all-products';

const shop_route: Router = Router();

shop_route.get('/all-products', getShopAllProducts);

export default shop_route;