import { Router } from 'express';
import { getShopAllProducts } from '../../controllers/shop/all-products';
import { getShopSingleProduct } from '../../controllers/shop/single-product';

const shop_route: Router = Router();

shop_route.get('/all-products', getShopAllProducts);
shop_route.get('/product/:id', getShopSingleProduct)

export default shop_route;