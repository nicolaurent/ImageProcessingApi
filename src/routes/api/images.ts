import express from 'express';
import imageProcessing from '../../logic/image-processing';

const imagesRoute = express.Router();

imagesRoute.get('/', async (req, res) => {
  try {
    const filename = req.query.filename as string;
    const height = Number(req.query.height ?? 300);
    const width = Number(req.query.width ?? 300);
    const outputPath = await imageProcessing.processRequest(
      filename,
      height,
      width
    );
    res.status(200).sendFile(outputPath);
  } catch (err) {
    res.status(400).send('Input file is missing');
  }
});

export default imagesRoute;
