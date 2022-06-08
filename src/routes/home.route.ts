import { Request, Response, Router } from "express";

const home_route: Router = Router();

home_route.get('', function getHome(req: Request, res: Response) {
    res.render('home');
})

export { home_route };
