import { Request, Response } from 'express';
import {} from "../../utils/random_int";

import { products } from "../../models/products.model";

function getAdminAddProduct(req: Request, res: Response) {
    res.render('admin/add-product');
}

function postAdminAddProduct(req: Request, res: Response) {
    const title = <string>req.body?.title;
    const description = <string>req.body?.description;
    const price = parseFloat(req.body?.price);
    const id = (Math.random() + 1).toString(36).substring(5);
    const image: string = 'https://picsum.photos/400'

    products.push({
        id: id,
        title: title,
        price: price,
        description: description,
        image: image
    })
    
    res.redirect('/');
}

export { getAdminAddProduct, postAdminAddProduct };