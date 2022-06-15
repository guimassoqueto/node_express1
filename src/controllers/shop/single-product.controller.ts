import { Request, Response } from "express";
import { Products } from "../../models/product.model";

function getSingleProduct(req: Request, res: Response) {
    const { id } =  req.params;
    
    Products.getSingleProduct(parseInt(id))
        .then( product => {
            res.render('shop/single-product', { product })
        })
        .catch( _ => {
            res.redirect('/404');
        })
}

export { getSingleProduct };