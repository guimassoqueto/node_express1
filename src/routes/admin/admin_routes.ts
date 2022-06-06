import { Router } from "express";

import { getAdminAddProduct, postAdminAddProduct } from "../../controllers/admin/add-product.controller";
import { getAdminEditableProducts, postAdminEditableProducts } from "../../controllers/admin/editable-products.controller";
import { getAdminEditProduct } from "../../controllers/admin/edit-product.controller";
import { postAdminDeleteProduct } from "../../controllers/admin/delete-product.controller"

const admin_route: Router = Router();

admin_route.get('/add-product', getAdminAddProduct);
admin_route.post('/add-product', postAdminAddProduct);

admin_route.get('/editable-products', getAdminEditableProducts);
admin_route.post('/editable-products', postAdminEditableProducts);

admin_route.get('/edit-product/:id', getAdminEditProduct);

admin_route.post('/delete-product/:id', postAdminDeleteProduct);

export default admin_route;