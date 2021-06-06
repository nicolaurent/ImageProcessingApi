import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imageDir = path.join(__dirname, '../../images/full/');
const thumbnailDir = path.join(__dirname, '../../images/thumb/')

const processRequest = async (
  filename: string,
  height: number,
  width: number
) => {
  const outputFilePath = thumbnailDir + filename + '_thumb.jpg';

  // If thumbnail is already created, skip image conversion
  if (!checkFileExist(outputFilePath)) {
    createThumbnailFolder();
    await convertImage(filename, height, width, outputFilePath);
  }

  return outputFilePath;
};

const convertImage = async (
  filename: string,
  height: number,
  width: number,
  outputFilePath: string
) => {
  const imagePath = imageDir + filename + '.jpg';

  await sharp(imagePath)
    .resize(width, height)
    .toFile(outputFilePath, (err) => {
      if (err) {
        console.log(err);
      }
    })
    .toBuffer();
};

const checkFileExist = (outputFilePath: string) => {
  if (fs.existsSync(outputFilePath)) {
    return true;
  }
  return false;
};

const createThumbnailFolder = async () => {
  if (!fs.existsSync(thumbnailDir)) {
    await fs.promises.mkdir(thumbnailDir);
  }
};

export default { processRequest, convertImage, checkFileExist, createThumbnailFolder };
