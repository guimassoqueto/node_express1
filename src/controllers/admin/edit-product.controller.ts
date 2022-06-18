import { Request, Response } from "express";
import { Products, Product } from "../../models/product.model";

function getEditProduct(req: Request, res: Response) {
    const { id } = req.params;

    Products.getSingleProduct(parseInt(id))
        .then( product => {
            res.render('admin/edit-product', { product: product })
        })
        .catch( ( _ ) => {
            res.redirect('/404');
        })
}

function postEditableProducts(req: Request, res: Response) {
    const { id, title, price, image, description, available } = req.body;
    const updated_product: Product = {
        id: parseInt(id),
        title: title,
        price: parseFloat(price),
        image: image,
        description: description,
        available: parseInt(available),
        createdBy: req.currentUserId
    };

    Products.updateProduct( updated_product )
        .then(product => {
            res.redirect('/admin/editable-products');
        })
        .catch( _ => {
            res.redirect('/');
        })
}

export { getEditProduct, postEditableProducts };