import express, { NextFunction, Request, Response } from 'express';
import path from 'path';
import sharp from 'sharp';
import { inputDir, outputDir } from '../../utils/imageHelpers';
import imageExists from '../../utils/imageHelpers';

const routes = express.Router();

routes.get('/', (req, res) => {
  /**
   * Note: Works only on jpg images
   */
  const [imageExistsFlag, imageName, imagePath] = imageExists(req, res);
  if (imageExistsFlag == false) {
    res
      .status(400)
      .send(
        `${imagePath} doesn't exist. Make sure to have an image inside ${inputDir} with jpg extensions`
      );
  }
  
  //   const imageName = req.query.filename as unknown as string;
  //   const imagePath = `${inputDir}/${imageName}.jpg`; //  TODO: Make the input image extension-agnostic
  //   const width = parseInt(req.query.width as unknown as string);
  //   const height = parseInt(req.query.height as unknown as string);
  //   const exists = imageExists(imageName, width, height);
  //   const outputImagePath = `${outputDir}/${imageName}_${width}_${height}.jpg`;
  //   if (exists == true) {
  //   }
  //   const image = sharp(imagePath);
  //   const resizedImage = image.resize(width, height);
  //   resizedImage.toFile(outputImagePath);
  //   setTimeout(() => {
  //     res.sendFile(path.resolve(outputImagePath));
  //   }, 1000);
});

export default routes;
