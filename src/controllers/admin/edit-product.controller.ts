import { Request, Response } from "express";
import { Products, Product } from "../../models/product.model";

function getEditProduct(req: Request, res: Response) {
    const { id } = req.params;

    Products.getSingleProduct(id)
    .then((product) => {
        if (product) res.render('admin/edit-product', { product: product })
        else res.redirect('/');
    })
    .catch((_) => {
        res.redirect('/');
    })
}

function postEditableProducts(req: Request, res: Response) {
    const { id, title, price, image, description, available } = req.body;
    const updated_product: Product = {
        id: id,
        title: title,
        price: price,
        image: image,
        description: description,
        available: available
    }

    Products.updateProduct(updated_product)
    .then((affected_rows) => {
        if(affected_rows) res.redirect('/admin/editable-products');
        else res.redirect('/');
    })
    .catch((_) => {
        res.redirect('/');
    })
}

export { getEditProduct, postEditableProducts };