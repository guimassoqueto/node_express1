import { Router } from "express";

import { getAddProduct, postAddProduct } from "../../controllers/admin/add-product.controller";
import { getEditableProducts } from "../../controllers/admin/editable-products.controller";
import { getEditProduct } from "../../controllers/admin/edit-product.controller";
import { postDeleteProduct } from "../../controllers/admin/delete-product.controller";

const admin_route: Router = Router();

admin_route.get('/add-product', getAddProduct);
admin_route.post('/add-product', postAddProduct);

admin_route.get('/editable-products', getEditableProducts);

admin_route.get('/edit-product/:id', getEditProduct);

admin_route.post('/delete-product', postDeleteProduct);

export { admin_route };