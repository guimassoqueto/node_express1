import { Request, Response } from "express";
import { Products } from "../../models/product.model";

function getSingleProduct(req: Request, res: Response) {
    const { id } =  req.params;
    
    Products.getSingleProduct(id, (product) => {
        if (product) {
            res.render('shop/single-product', { product: product });
        } else {
            res.redirect('/');
        }
    })
}

export { getSingleProduct };