//imports
import express from 'express';
import routes from './routes';

//init
const app = express();
app.use(express.json());
app.use(routes);

//listen
app.listen(3333);