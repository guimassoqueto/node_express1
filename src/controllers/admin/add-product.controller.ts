import { Request, Response } from "express";
import { Products, Product } from "../../models/product.model";
import { randomID } from "../../utils/randomID";

function getAddProduct(req: Request, res: Response) {
    res.render('admin/add-product');
}

function postAddProduct(req: Request, res: Response) {
    const { title, price, description, image } = req.body;
    
    const new_product: Product = {
        title: title,
        id: randomID(),
        price: price,
        description: description,
        image: image
    }

    Products.addProduct(new_product, (status) => {
        if (status) console.log("ok")
    });

    res.redirect('/');
}

export { getAddProduct, postAddProduct };