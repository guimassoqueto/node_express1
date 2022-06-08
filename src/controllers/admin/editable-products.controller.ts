import { Request, Response } from "express";
import { Products, Product } from "../../models/product.model";

function getEditableProducts(req: Request, res: Response) {
    Products.getAllProducts((products) => {
        res.render('admin/editable-products', { products: products });
    })
}

export { getEditableProducts };