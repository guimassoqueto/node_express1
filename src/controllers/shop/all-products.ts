import { Request, Response } from "express";
import productsModel from "../../models/products.model";

function getShopAllProducts(req: Request, res: Response) {
    res.render('shop/all-products', { products: productsModel });
}

export { getShopAllProducts };