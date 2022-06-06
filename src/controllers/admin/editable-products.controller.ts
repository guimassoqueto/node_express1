import { Request, Response } from "express";
import { products, ProductType } from "../../models/products.model";

function getAdminEditableProducts(req: Request, res: Response) {
    res.render("admin/editable-products", { products });
}

function postAdminEditableProducts(req: Request, res: Response) {
    const { index, id, title, price, image, description } = req.body;

    const replacer_product: ProductType = {
        id: id,
        title: title,
        price: parseFloat(price),
        image: image,
        description: description,
    }

    products[index] = replacer_product;
    
    res.redirect("/admin/editable-products");
}

export { getAdminEditableProducts, postAdminEditableProducts };