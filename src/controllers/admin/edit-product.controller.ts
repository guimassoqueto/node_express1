import { Request, Response } from "express";
import { products } from "../../models/products.model";

function getAdminEditProduct(req: Request, res: Response) {
    const { id } = req.params;

    const product_index: number = products.findIndex(product => product.id === id);

    if (product_index != -1) return res.render('admin/edit-product', { index: product_index, product: products[product_index]})

    res.redirect('404');
}

export { getAdminEditProduct };