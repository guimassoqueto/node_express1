import { Request, Response } from "express";
import { ProductOnCart, TProductOnCart } from "../../models/cart.model"
import { TProduct } from "../../models/product.model";

interface ICartData {
    productId: number;
    userId: number;
    product: TProduct
}

function getCart(req: Request, res: Response) {
    ProductOnCart.getProductsOnCart(req.currentUserId)
        .then( cart => {
            const cart_items = <ICartData[]>cart;

            let cart_total = cart_items.reduce(function (acc, obj) { return acc + +obj.product.price; }, 0);

            res.render('shop/cart', { cart: cart, total: cart_total });
        })
        .catch(err => res.redirect('/'));
}

/* remove item fom cart */
function postCart(req: Request, res: Response) {
    const product_id = +req.body.product_id;

    ProductOnCart.removeFromCart(product_id, req.currentUserId)
        .then( removed_item => {
            res.redirect('/shop/cart');
        })
        .catch( error => {
            console.error(error);
            res.redirect('/404');
        })
}

export { getCart, postCart };