import express from 'express';
import routes from './routes/index';
import logger from './middleware/logger';

const app = express();
const port = 8000;

app.use('/api', logger, routes);

app.listen(port, () => {
  console.log(`serving running on localhost:${port}`);
});

export default app; // to test endpoint
