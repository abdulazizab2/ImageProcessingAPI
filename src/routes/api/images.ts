import express, { NextFunction, Request, Response } from 'express';
import path from 'path';
import sharp from 'sharp';

const inputDir = './images';
const outputDir = './outputs';

const routes = express.Router();

routes.get('/', (req, res) => {
  /**
   * Note: Works only on jpg images
   */
  const imageName = req.query.filename;
  const imagePath = `${inputDir}/${imageName}.jpg`; //  TODO: Make the input image extension-agnostic
  const width = (req.query.width as unknown) as string;
  const height = (req.query.height as unknown) as string;
  const image = sharp(imagePath);
  const resizedImage = image.resize(parseInt(width), parseInt(height));
  const outputImagePath = `${outputDir}/${imageName}.jpg`;
  resizedImage.toFile(outputImagePath);
  setTimeout(()=>{
    res.sendFile(path.resolve(outputImagePath))
  }, 1000)
});

export default routes;
