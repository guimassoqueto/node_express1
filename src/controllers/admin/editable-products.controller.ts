import { Request, Response } from "express";
import { products } from "../../models/products.model";

function getAdminEditableProducts(req: Request, res: Response) {
    res.render("admin/editable-products", { products });
}

export { getAdminEditableProducts };