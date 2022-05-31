import express, { Express, NextFunction, Request, Response } from 'express';
import { dirname, join } from 'path';

const PORT = 3000;
const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
    console.log('first middleware');
    next();
})

app.use('/gaymen', (req: Request, res: Response, next: NextFunction) => {
    res.send('<h1>Gaymen middleware</h1>');
})

app.use('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('<h1>Home middleware</h1>');
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})


