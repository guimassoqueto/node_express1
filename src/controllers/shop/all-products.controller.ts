import { Request, Response } from "express";
import { Products } from "../../models/product.model";

function getAllProducts(req: Request, res: Response) {
    Products.getAllProducts()
        .then( ( products: Products[] ) => {
            res.render('shop/all-products', { products })
        })
        .catch( _ => {
            res.redirect('/404');
        })
}

export { getAllProducts }