import { Request, Response } from "express";
import { Products } from "../../models/product.model";

function postDeleteProduct(req: Request, res: Response) {
    const { id } = req.body;

    Products.deleteProduct(id)
    .then((affected_row) => {
        if (affected_row) res.redirect('/admin/editable-products');
        else res.redirect('/');
    })
    .catch((_) => {
        res.redirect('/');
    })
}

export { postDeleteProduct };