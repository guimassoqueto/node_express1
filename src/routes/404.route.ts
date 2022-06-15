import { Router } from "express";
import { getError } from "../controllers/404.controller";

const error_route: Router = Router();

error_route.get('/', getError)

export { error_route };