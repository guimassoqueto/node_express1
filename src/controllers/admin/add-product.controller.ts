import { Request, Response } from "express";
import { Products, TProduct } from "../../models/product.model";

function getAddProduct(req: Request, res: Response) {
    res.render('admin/add-product');
}

function postAddProduct(req: Request, res: Response) {
    const { title, image, description, price, available } = req.body;

    const new_product: TProduct = {
        id: 0,
        title: title,
        image: image,
        description: description,
        price: parseFloat(price),
        available: parseInt(available),
        createdBy: 1
    }

    Products.addProduct(new_product)
        .then( ( added_product ) => {
            res.redirect('/shop/all-products')
        })
        .catch( _ => res.redirect('/404') )
}

export { getAddProduct, postAddProduct };