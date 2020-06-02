//imports
import express from 'express';
import knex from './database/connection';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

//init
const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

//routes
    //return all items from items table
routes.get('/items', itemsController.index);

    //create a point
routes.post('/points', pointsController.create);

export default routes;