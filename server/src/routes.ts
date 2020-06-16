//imports
import express from 'express';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';
import multer from 'multer';
import multerConfig from './config/multer';

//init
const routes = express.Router();
const upload = multer(multerConfig);
const pointsController = new PointsController();
const itemsController = new ItemsController();

//routes
    //return all items from items table
routes.get('/items', itemsController.index);

    //create a point
routes.post('/points', upload.single('image'), pointsController.create);

    //return all points
routes.get('/points', pointsController.index);

    //return one point
routes.get('/points/:id', pointsController.show);

export default routes;