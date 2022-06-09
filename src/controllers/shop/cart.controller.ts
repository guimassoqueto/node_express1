import { Request, Response } from "express";
import { Cart } from "../../models/cart.model";

function getCart(req: Request, res: Response) {
    res.redirect('/')
}

function postCart(req: Request, res: Response) {
    const { id } = req.body;
    res.redirect('/')
}

export { getCart, postCart };