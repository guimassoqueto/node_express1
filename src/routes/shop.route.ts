import { Router, Request, Response } from 'express';
import { join } from 'path';

import { products } from './admin.route';

const shop_route: Router = Router();

shop_route.get('/', (req: Request, res: Response, _) => {
    products.length && console.log(products);

    // http://expressjs.com/en/api.html#res.render
    res.render('shop', { products: products });
})

export default shop_route;