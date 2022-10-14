import express from 'express';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('upload image here')
});

export default routes;
