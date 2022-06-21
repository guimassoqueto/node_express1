import { Router } from "express";
import { getAllProducts } from "../../controllers/shop/all-products.controller";
import { getSingleProduct, postSingleProduct } from "../../controllers/shop/single-product.controller";
import { getCart, postCart } from "../../controllers/shop/cart.controller";
import { postNewOrder } from "../../controllers/shop/orders.controller";

const shop_route: Router = Router();

shop_route.get('/all-products', getAllProducts);

shop_route.get('/product/:id', getSingleProduct);
shop_route.post('/product/:id', postSingleProduct);

shop_route.get('/cart', getCart);
shop_route.post('/cart', postCart);

shop_route.post('/new-order', postNewOrder)

export { shop_route };