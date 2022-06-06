import { Request, Response } from "express";
import { products } from "../../models/products.model";
import { cart } from "../../models/cart.model";

function getShopSingleProduct(req: Request, res: Response) {
    const { id } = req.params;

    const product = products.find(prod => prod.id === id);

    if (product) return res.render('shop/single-product', { product: product });
    res.render('404')
}

function postShopSingleProduct(req: Request, res: Response) {
    const { id } = req.params;

    const product = products.find(prod => prod.id === id);

    const cart_is_empty: boolean = cart.findIndex(prod => prod.id === id) === -1;

    if (cart_is_empty && product) cart.push(product);
    
    res.redirect('/shop/cart');
}

export { getShopSingleProduct, postShopSingleProduct };