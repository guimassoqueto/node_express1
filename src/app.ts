import express, { Express, NextFunction, Request, Response } from 'express';
import { dirname, join } from 'path';
import bodyParser from 'body-parser';

const PORT = 3000;
const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
    console.log('first middleware');
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product', (req: Request, res: Response, next: NextFunction) => {
    res.send('<form action="/product" method="post"><label for="txt">Text</label><input type="text" name="text" id="txt" required><button type="submit">Send</button></form>');
})

app.post('/product', (req: Request, res: Response, _) => {
    const { text, ...rest} = req.body;
    console.log(text);
    res.send(text);
})

app.use('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('<h1>Home middleware</h1>');
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})


