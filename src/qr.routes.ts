import express, { Express, Router, Request, Response } from 'express';
import * as qr from 'qrcode'

let qrRoutes: Express = express();
qrRoutes.use(express.urlencoded({ extended: true }));


qrRoutes.get('/', (req: Request, res: Response) => {
    res.render('index', { title: 'Minha Página EJS' });
});

qrRoutes.post("/scan", (req: any, res: any) => {
    const url = req.body.url;
    if (url.length === 0) res.send("Empty Data!");

    qr.toDataURL(url, (err, src) => {
        if (err) res.send("Error occured");

        res.render("scan", { src });
    });
});
export default qrRoutes;
