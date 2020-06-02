//imports
import express from 'express';
import path from 'path';
import routes from './routes';

//init
const app = express();
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

//listen
app.listen(3333);