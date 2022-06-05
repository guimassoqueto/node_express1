import { Router } from "express";
import { getAdminAddProduct, postAdminAddProduct } from "../../controllers/admin/add-product";
import { getAdminEditProduct, postAdminEditProduct } from "../../controllers/admin/edit-product";

const admin_route: Router = Router();

admin_route.get('/add-product', getAdminAddProduct);
admin_route.post('/add-product', postAdminAddProduct);

admin_route.get('/edit-product', getAdminEditProduct);
admin_route.post('/edit-product', postAdminEditProduct);

export default admin_route;