import { Request, Response } from "express";
import { Products } from "../../models/product.model";

function postDeleteProduct(req: Request, res: Response) {
    const { id } = req.body;

    Products.deleteProduct(parseInt(id))
        .then( _ => {
            res.redirect('/admin/editable-products');
        })
        .catch( _ => {
            res.redirect('/404');
        })
}

export { postDeleteProduct };