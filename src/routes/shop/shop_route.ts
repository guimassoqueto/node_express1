import { Router } from 'express';

import { getShopAllProducts } from '../../controllers/shop/all-products.controller';
import { getShopSingleProduct, postShopSingleProduct } from '../../controllers/shop/single-product.controller';
import { getShopCart } from '../../controllers/shop/cart.controller';

const shop_route: Router = Router();

shop_route.get('/all-products', getShopAllProducts);

shop_route.get('/product/:id', getShopSingleProduct);
shop_route.post('/product/:id', postShopSingleProduct);

shop_route.get('/cart', getShopCart);

export default shop_route;