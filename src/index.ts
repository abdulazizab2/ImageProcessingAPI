import express from 'express';
import routes from './routes/index';

const app = express();
const port = 8000;

app.use('/api', routes);

app.listen(port, () => {
  console.log(`serving running on localhost:${port}`);
});
