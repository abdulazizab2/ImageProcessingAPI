import express from 'express';
import fs from 'fs'; // not Async
import sharp from 'sharp';
import path from 'path';

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

async function resizeImage(
  imagePath: string,
  outputImagePath: string,
  width: number,
  height: number,
  res: express.Response
): Promise<void> {
  const image = sharp(imagePath);
  const resizedImage = image.resize(width, height);
  await resizedImage.toFile(outputImagePath);
  res.sendFile(path.resolve(outputImagePath));
}

export { fileExists, inputImageExists, outputImageExists, resizeImage };
