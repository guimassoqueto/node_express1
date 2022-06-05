import { Router } from 'express';
import { getHome } from '../controllers/home.controller';

const home_route: Router = Router();

home_route.get('/', getHome);

export default home_route;