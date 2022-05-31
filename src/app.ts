import express, { Express, NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';

// Routes
import admin_route from './routes/admin.route';
import shop_route from './routes/shop.route';

const PORT: number = 3000;
const app: Express = express();

app.use(bodyParser.urlencoded({ extended: false }));

// filtering path
app.use('/admin', admin_route);
app.use(shop_route);

app.use((req: Request, res: Response, _) => {
    res.status(404).send('<h1>Page Not Found</h1>');
})

app.listen(PORT)


