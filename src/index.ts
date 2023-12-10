import express from 'express';
import bodyParser from 'body-parser';
import qrRoutes from './qr.routes';
import * as path from 'path';

const app = express();
const bp = bodyParser;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use("/", qrRoutes);
app.use(bp.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(bp.json());

const port = 3001;
app.listen(port, () => console.log(`Server at ${port}`));
