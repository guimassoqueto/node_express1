import { Request, Response } from "express";

function getError(req: Request, res: Response) {
    res.status(404).render('404');
}

export { getError };