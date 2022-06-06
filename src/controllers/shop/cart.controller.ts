import { Request,  Response } from "express";
import { cart } from "../../models/cart.model";
import { ProductType } from "../../models/products.model";

function getShopCart(req: Request, res: Response) {
    let total: number = 0;
    
    if (cart.length) {
        for (const item of cart) total += item.price;
    }

    res.render('shop/cart', { cart: cart, total: total.toFixed(2) });
}

export { getShopCart };