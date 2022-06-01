import { NextFunction, Router, Request, Response } from 'express';
import { join } from 'path';

const admin_route: Router = Router();

let products: string[] = [];

admin_route.get('/add-product', (req: Request, res: Response, _) => {
    res.render('add-product');
})

admin_route.post('/add-product', (req: Request, res: Response, _) => {
    const product: string = <string>req.body?.title;
    products.push(product);
    res.redirect('/');
})

export { admin_route, products } ;