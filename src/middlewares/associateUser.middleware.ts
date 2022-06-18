import { Request, Response, NextFunction } from "express";

function setDefaultuser(req: Request, res: Response, next: NextFunction) {
    req.currentUserId = 1;
    next();
}

export { setDefaultuser }