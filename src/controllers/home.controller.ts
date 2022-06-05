import { Request, Response } from 'express';

// get 
function getHome(req: Request, res: Response) {
    res.render('home');
}

export { getHome };