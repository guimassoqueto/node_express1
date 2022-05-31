import express, { Express, NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';

// Routes
import admin_route from './routes/admin.route';
import shop_route from './routes/shop.route';

const PORT: number = 3000;
const app: Express = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(admin_route);
app.use(shop_route);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})


