import { Request, Response } from "express";
import { Products } from "../../models/product.model";
import { ProductOnCart } from "../../models/cart.model";

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

/* Add to cart */
function postSingleProduct(req: Request, res: Response) {
    const product_id: number = +req.body.product_id; // product id
    
    ProductOnCart.addToProductsOnCart(product_id, req.currentUserId)
        .then(_ => res.redirect('/shop/cart'))  
        .catch(_ => res.redirect('/404'))
}

export { getSingleProduct, postSingleProduct };