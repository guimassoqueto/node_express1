import { Request, Response } from 'express';

function getAdminEditProduct(req: Request, res: Response) {
    res.render('admin/edit-product');
}

function postAdminEditProduct(req: Request, res: Response) {
    res.redirect('/');
}

export { getAdminEditProduct, postAdminEditProduct };