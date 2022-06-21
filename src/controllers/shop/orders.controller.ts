import { Response, Request } from "express";
import { Order } from "../../models/order.model"

function postNewOrder(req: Request, res: Response) {
    Order.createOrder(req.currentUserId)
        .then( _ => {
            res.render('shop/new-order');
        })
        .catch( _ => {
            res.redirect('/404');
        })
}

export { postNewOrder };