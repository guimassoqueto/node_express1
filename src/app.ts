import express, { Express, NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { join } from 'path';

// Routes
import { admin_route } from './routes/admin.route';
import shop_route from './routes/shop.route';

const PORT: number = 3000;
const app: Express = express();

app.use(bodyParser.urlencoded({ extended: false }));

// static files
app.use(express.static(join(__dirname, 'public')))


// filtering path
app.use('/admin', admin_route);
app.use(shop_route);

app.use((req: Request, res: Response, _) => {
    res.status(404).sendFile(join(__dirname, 'views/404.html'));
});

app.listen(PORT);


