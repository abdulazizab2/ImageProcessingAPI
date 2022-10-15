import express, { NextFunction, Request, Response } from 'express';
import path from 'path';
import sharp from 'sharp';
import { inputDir, outputDir } from '../../utils/imageHelpers';
import {
  inputImageExists,
  outputImageExists,
  resizeImage,
} from '../../utils/imageHelpers';

const routes = express.Router();

routes.get('/', (req, res) => {
  /**
   * Note: Works only on jpg images
   */
  const [imageExistsFlag, imageName, imagePath] = inputImageExists(req);
  if (imageExistsFlag == false) {
    res
      .status(400)
      .send(
        `${imagePath} doesn't exist. Make sure to have an image inside ${inputDir} with jpg extensions`
      );
  }
  const [outputImageFlag, outputImagePath, width, height] = outputImageExists(
    req,
    imageName
  );
  if (outputImageFlag == true) {
    res.sendFile(path.resolve(outputImagePath));
  } else {
    resizeImage(imagePath, outputImagePath, width, height);
    setTimeout(() => {
      res.sendFile(path.resolve(outputImagePath));
    }, 2000);
  }
});

export default routes;
