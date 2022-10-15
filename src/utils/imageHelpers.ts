import express from 'express';
import fs from 'fs'; // not Async
import sharp from 'sharp';

export const inputDir = './images';
export const outputDir = './outputs';

const fileExists = (filePath: string): boolean => {
  let flag = true;
  try {
    fs.accessSync(filePath, fs.constants.F_OK);
  } catch (err) {
    flag = false;
  }
  return flag;
};

const inputImageExists = (req: express.Request): [boolean, string, string] => {
  const imageName = req.query.filename as unknown as string;
  const imagePath = `${inputDir}/${imageName}.jpg`; //  TODO: Make the input image extension-agnostic
  const flag = fileExists(imagePath);
  return [flag, imageName, imagePath];
};

const outputImageExists = (
  req: express.Request,
  imageName: string
): [boolean, string, number, number] => {
  const width = parseInt(req.query.width as unknown as string);
  const height = parseInt(req.query.height as unknown as string);
  const outputImagePath = `${outputDir}/${imageName}_${width}_${height}.jpg`;
  const flag = fileExists(outputImagePath);
  return [flag, outputImagePath, width, height];
};

const resizeImage = (
  imagePath: string,
  outputImagePath: string,
  width: number,
  height: number
): void => {
  const image = sharp(imagePath);
  const resizedImage = image.resize(width, height);
  resizedImage.toFile(outputImagePath);
};

export { fileExists, inputImageExists, outputImageExists, resizeImage };
