import { Request, Response } from "express";
import { Products } from "../../models/product.model";

function getAllProducts(req: Request, res: Response) {
    Products.getAllProducts((products) => {
        res.render('shop/all-products', { products: products });
    })
}

export { getAllProducts }