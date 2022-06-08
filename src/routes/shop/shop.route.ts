import { Request, Response, Router } from "express";
import { getAllProducts } from "../../controllers/shop/all-products.controller";
import { getSingleProduct } from "../../controllers/shop/single-product.controller";
import { getCart, postCart } from "../../controllers/shop/cart.controller";

const shop_route: Router = Router();

shop_route.get('/all-products', getAllProducts);

shop_route.get('/product/:id', getSingleProduct);

shop_route.get('/cart', getCart);
shop_route.post('/cart', postCart);

export { shop_route };