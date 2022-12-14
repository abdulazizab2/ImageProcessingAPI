import express from 'express';

const logger = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  console.log(`${req.url} was routed`);
  next();
};

export default logger;
