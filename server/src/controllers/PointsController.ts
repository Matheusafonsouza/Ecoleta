import { Request, Response } from 'express';
import knex from '../database/connection';

export default class PointsController {
    async show(req: Request, res: Response) {
        const { id } = req.params;

        const point = await knex('points').where('id', id).first();

        if (!point)
            return res.status(400).send({ error: 'Point not found.' });

        return res.json(point);
    }

    async create(req: Request, res: Response) {
        const { 
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            items
        } = req.body;
    
        const trx = await knex.transaction();

        const point = {
            image: 'image-fake',
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
        };
    
        const insertedIds = await trx('points').insert(point);
    
        const point_id = insertedIds[0];
    
        const pointItems = items.map((item_id: number) => {
            return {
                item_id,
                point_id,
            }
        });
    
        await trx('point_items').insert(pointItems);
    
        trx.commit();

        return res.json({
            id: point_id,
            ...point,
        });
    }
}