import { Request, Response } from "express";
import { Products } from "../../models/product.model";

function getEditProduct(req: Request, res: Response) {
    const { id } = req.params;

    Products.getSingleProduct(id, (product) => {
        if (product) {
            res.render('admin/edit-product', { product: product })
        } else {
            res.redirect('/');
        }
    })
}

export { getEditProduct };