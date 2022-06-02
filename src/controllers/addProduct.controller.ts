import { Request, Response, NextFunction } from 'express';
import { productsModel } from '../models/products.model';

// get 
function getAddProduct(req: Request, res: Response, next: NextFunction): void {
    res.render('add-product');
}

// post
function postAddProduct(req: Request, res: Response, next: NextFunction): void {
    const product: string = <string>req.body?.title;
    productsModel.push(product);
    res.redirect('/');
}

export { getAddProduct, postAddProduct };