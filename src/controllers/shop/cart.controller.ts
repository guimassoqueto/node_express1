import { Request, Response } from "express";
import { Cart } from "../../models/cart.model";

function getCart(req: Request, res: Response) {
    Cart.getCart((cart_items) => {
        let total = 0;
        for(const item of cart_items) total += parseFloat(item.price);
        
        res.render('shop/cart', { cart: cart_items, total: total })
    })
}

function postCart(req: Request, res: Response) {
    const { id } = req.body;
    Cart.addToCart(id, (status) => {
        if(status) res.redirect('/shop/cart');
    })
}

export { getCart, postCart };