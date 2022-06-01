import express, { Express, NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { join } from 'path';

// Routes
import { admin_route } from './routes/admin.route';
import shop_route from './routes/shop.route';

// help utilities
import { viewsLocation } from './utils/constants';

const PORT: number = 3000;
const app: Express = express();

// http://expressjs.com/en/api.html#app.set
app.set('view engine', 'pug');

// set the folder location for the views
app.set('views', viewsLocation);

// static files
app.use(express.static(join(__dirname, 'public')))

app.use(bodyParser.urlencoded({ extended: false }));

// filtering path
app.use('/admin', admin_route);
app.use(shop_route);

app.use((req: Request, res: Response, _) => {
    res.status(404).render('404');
});

app.listen(PORT);


