import { Request, Response } from "express";
import { Products, Product } from "../../models/product.model";

function getEditableProducts(req: Request, res: Response) {
    Products.getAllProducts()
    .then((products) => {
        res.render('admin/editable-products', { products: products });
    })
    .catch((_) => {
        res.redirect('/');
    });
}

export { getEditableProducts };