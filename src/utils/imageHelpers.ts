import express, {  Request, Response } from 'express';
import fs from 'fs';

export const inputDir = './images';
export const outputDir = './outputs';

const imageExists = (req: Request, res: Response): [boolean, string, string] => {
  const imageName = req.query.filename as unknown as string;
  const imagePath = `${inputDir}/${imageName}.jpg`; //  TODO: Make the input image extension-agnostic
  let flag = true;
  try {
    fs.accessSync(imagePath, fs.constants.F_OK);
  } catch (err) {
    flag = false;
  }
  return [flag, imageName, imagePath];
};

export default imageExists;