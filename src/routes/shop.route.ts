import { Router, Request, Response } from 'express';
import { join } from 'path';

const shop_route: Router = Router();

shop_route.get('/', (req: Request, res: Response, _) => {
    res.sendFile(join(__dirname, '../views/shop.html'));
})

export default shop_route;