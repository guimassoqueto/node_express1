import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { join } from 'path';

// help utilities
import { viewsLocation } from './utils/constants';

// routes
import { home_route } from './routes/home.route'
import { admin_route } from './routes/admin/admin.route';
import { shop_route } from './routes/shop/shop.route';
import { error_route } from './routes/404.route';

// custom middlewares
import { setDefaultUserCart } from './middlewares/associateUser.middleware';

const PORT: number = 3000;
const app: Express = express();

// http://expressjs.com/en/api.html#app.set
app.set('view engine', 'pug');

// set the folder location for the views
app.set('views', viewsLocation);

// static files
app.use(express.static(join(__dirname, 'public')))

// body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// setting the dafault user
app.use(setDefaultUserCart);

// routes
app.use(home_route);
app.use('/admin', admin_route);
app.use('/shop', shop_route);
app.use('/404', error_route);

app.use((req: Request, res: Response, _) => {
    res.status(404).render('404');
});

app.listen(PORT);