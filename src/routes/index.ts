import express from 'express';
import imagesRoute from './api/images';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.status(200).send('Home Page');
});

routes.use('/images', imagesRoute);

export default routes;
