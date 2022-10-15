import express, { NextFunction, Request, Response } from 'express';
import path from 'path';
import { inputDir, outputDir } from '../../utils/imageHelpers';
import {
  inputImageExists,
  outputImageExists,
  resizeImage,
} from '../../utils/imageHelpers';

const routes = express.Router();

routes.get('/', (req: Request, res: Response) => {
  /**
   * Note: Works only on jpg images
   */
  const [imageExistsFlag, imageName, imagePath] = inputImageExists(req);
  if (imageExistsFlag == false) {
    res.status(404);
    throw new Error(
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
    }, 2000); // Timeout is used as resizeImage() occurs after sendFile(). # TODO: A smarter workaround
  }
});

export default routes;
