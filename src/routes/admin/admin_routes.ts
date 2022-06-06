import { Router } from "express";
import { getAdminAddProduct, postAdminAddProduct } from "../../controllers/admin/add-product.controller";
import { getAdminEditableProducts } from "../../controllers/admin/editable-products.controller";

const admin_route: Router = Router();

admin_route.get('/add-product', getAdminAddProduct);
admin_route.post('/add-product', postAdminAddProduct);

admin_route.get('/editable-products', getAdminEditableProducts);
// admin_route.post('/editable-products', postAdminAddProduct);

export default admin_route;