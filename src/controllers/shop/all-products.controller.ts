import { Request, Response } from "express";
import { Products } from "../../models/product.model";

function getAllProducts(req: Request, res: Response) {
    Products.getAllProducts()
    .then((product) => {
        res.render('shop/all-products', { products: product });
    })
    .catch((_) => {
        res.redirect('/');
    })
}

export { getAllProducts }