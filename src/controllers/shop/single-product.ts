import { Request, Response } from "express";
import { products } from "../../models/products.model";

function getShopSingleProduct(req: Request, res: Response) {
    const { id } = req.params;

    const product = products.find(prod => prod.id === id);

    if (product) return res.render('shop/single-product', { product: product });
    res.render('404')
}

export { getShopSingleProduct };