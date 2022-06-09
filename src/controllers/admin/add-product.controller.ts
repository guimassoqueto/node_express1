import { Request, Response } from "express";
import { Products, Product } from "../../models/product.model";
import { randomID } from "../../utils/randomID";

function getAddProduct(req: Request, res: Response) {
    res.render('admin/add-product');
}

function postAddProduct(req: Request, res: Response) {
    const { title, image, description, price, available } = req.body;

    const new_product: Product = {
        id: randomID(),
        title: title,
        image: image,
        description: description,
        price: parseFloat(price),
        available: parseInt(available)
    }

    Products.addProduct(new_product)
    .then((rows_affected) => {
        if (rows_affected) res.redirect('/admin/editable-products');
        else res.redirect('/');
    })
    .catch((_) => {
        res.redirect('/');
    })
}

export { getAddProduct, postAddProduct };