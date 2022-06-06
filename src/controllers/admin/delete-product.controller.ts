import { Request, Response } from "express";
import { products } from "../../models/products.model";

function postAdminDeleteProduct(req: Request, res: Response) {
    const { id } = req. params;
    
    const prod_index: number = products.findIndex(product => product.id === id);

    if (prod_index !== -1) products.splice(prod_index, 1);

    res.redirect('/admin/editable-products');
}

export { postAdminDeleteProduct };