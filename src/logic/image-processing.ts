import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imageDir = path.join(__dirname, '../../images/full/');
const thumbnailDir = path.join(__dirname, '../../images/thumb/');

const processRequest = async (
  filename: string,
  height: number,
  width: number
): Promise<string> => {
  const outputFilePath =
    thumbnailDir +
    filename +
    '_thumb_' +
    width.toString() +
    '_' +
    height.toString() +
    '.jpg';
  const imagePath = imageDir + filename + '.jpg';

  // Check input image exist
  if (!checkFileExist(imagePath)) {
    throw new Error('input image is not found');
  }

  // If thumbnail is already created, skip image conversion
  if (!checkFileExist(outputFilePath)) {
    createThumbnailFolder();
    await convertImage(imagePath, height, width, outputFilePath);
  }

  return outputFilePath;
};

const convertImage = async (
  imagePath: string,
  height: number,
  width: number,
  outputFilePath: string
): Promise<void> => {
  await sharp(imagePath)
    .resize(width, height)
    .toFile(outputFilePath, (err: Error): void => {
      if (err) {
        throw err;
      }
    })
    .toBuffer();
};

const checkFileExist = (outputFilePath: string): boolean => {
  if (fs.existsSync(outputFilePath)) {
    return true;
  }
  return false;
};

const createThumbnailFolder = async (): Promise<void> => {
  if (!fs.existsSync(thumbnailDir)) {
    await fs.promises.mkdir(thumbnailDir);
  }
};

export default {
  processRequest,
  convertImage,
  checkFileExist,
  createThumbnailFolder,
  thumbnailDir,
  imageDir,
};
