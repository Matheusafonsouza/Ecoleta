//imports
import express from 'express';
import knex from './database/connection';
import PointsController from './controllers/PointsController';

//init
const routes = express.Router();
const pointsController = new PointsController();

//routes
    //return all items from items table
routes.get('/items', async (req, res) => {
    const items = await knex('items').select('*');

    const serializedItems = items.map(item => {
        return {
            id: item.id,
            title: item.title,
            image_url: `http://localhost:3333/uploads/${item.image}`,
        };
    });

    return res.json(serializedItems);
});

    //create a point
routes.post('/points', pointsController.create);

export default routes;