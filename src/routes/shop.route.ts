import { Router } from 'express';
import { getHome } from '../controllers/home.controller';

const shop_route: Router = Router();

shop_route.get('/', getHome)

export default shop_route;