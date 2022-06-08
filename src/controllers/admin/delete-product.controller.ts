import { Request, Response } from "express";
import { Products } from "../../models/product.model";

function postDeleteProduct(req: Request, res: Response) {
    const { id } = req.body;

    Products.deleteProduct(id);

    res.redirect('/');
}

export { postDeleteProduct };