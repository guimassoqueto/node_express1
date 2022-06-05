import { Request, Response } from 'express';
import productsModel from "../../models/products.model";

function getAdminAddProduct(req: Request, res: Response) {
    res.render('admin/add-product');
}

function postAdminAddProduct(req: Request, res: Response) {
    const title = <string>req.body?.title;
    productsModel.push(title);
    
    res.redirect('/');
}

export { getAdminAddProduct, postAdminAddProduct };