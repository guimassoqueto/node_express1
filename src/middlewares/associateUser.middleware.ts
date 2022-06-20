import { Request, Response, NextFunction } from "express";
import { TUser, Users } from "../models/user.model";

function setDefaultUserCart(req: Request, res: Response, next: NextFunction) {
    Users.getOrCreateUser()
        .then((u) => {
            const user: TUser = <TUser>u;
            req.currentUserId = user.id;
            next();
        })
        .catch(error => {
            console.error(error);
            req.currentUserId = 1;
            next();
        })
}

export { setDefaultUserCart }