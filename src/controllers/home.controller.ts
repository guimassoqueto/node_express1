import { Request, Response, NextFunction } from 'express';
import  { productsModel } from '../models/products.model'

// get 
function getHome(req: Request, res: Response, next: NextFunction): void {
    productsModel.length && console.log(productsModel);
    // http://expressjs.com/en/api.html#res.render
    res.render('shop', { products: productsModel });
}

export { getHome };