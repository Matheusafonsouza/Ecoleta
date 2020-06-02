//imports
import express from 'express';

//init
const routes = express.Router();

//routes
routes.get('/', (req, res) => {
    return res.json({ message: "hello" });
});

export default routes;