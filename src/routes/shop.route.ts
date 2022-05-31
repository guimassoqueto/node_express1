import { Router, Request, Response } from 'express';

const shop_route: Router = Router();

shop_route.get('/', (req: Request, res: Response, _) => {
    res.send('<h1>Home</h1><a href="/add-product">Add Product</a>');
})

export default shop_route;