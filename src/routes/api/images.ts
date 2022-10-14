import express, { NextFunction, Request, Response } from 'express';
import path from 'path';

const inputDir = './images';
const outputDir = './outputs';

const routes = express.Router();

routes.get('/', (req, res) => {
  /**
   * Note: Works only on jpg images
   */
  const inputImage = `${inputDir}/${req.query.filename}.jpg`; //  TODO: Make the input image extension-agnostic
  res.sendFile(path.resolve(inputImage)); // Not using absolute path will produce error using sendFile function
});

export default routes;
