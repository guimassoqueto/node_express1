import { NextFunction, Router, Request, Response } from 'express';

const admin_route: Router = Router();

admin_route.get('/add-product', (req: Request, res: Response, _): Response => {
    return res.send('<h1>Add Product</h1><form action="/product" method="post"><label for="txt">Text</label><input type="text" name="text" id="txt" required><button type="submit">Send</button></form>');
})

admin_route.post('/product', (req: Request, res: Response, _): Response => {
    const { text, ...rest } = req.body;
    return res.send(`<h1>Product Page</h1><i>${text}</i>`);
})

export default admin_route;