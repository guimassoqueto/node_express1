import { Request, Response } from "express";
import { products } from "../../models/products.model";

function getShopAllProducts(req: Request, res: Response) {
    res.render('shop/all-products', { products: products });
}

export { getShopAllProducts };