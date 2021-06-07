import imageProcessing from '../../logic/image-processing';
import fs from 'fs';

describe('Test Image Processing', () => {
  
    describe('Test processRequest', () => {
        const filename = 'encenadaport';
        const width = 200;
        const height = 200;
        const expectedOutputPath = imageProcessing.thumbnailDir + filename + '_thumb.jpg';

        it('Check return string outputpath', async () => {
            const outputFilePath = await imageProcessing.processRequest(filename, height, width);
            expect(outputFilePath).toEqual(expectedOutputPath)
        })

        afterAll(async () => {
            await fs.promises.unlink(expectedOutputPath);
        })
    });

    describe('Test convertImage', () => {
        const filename = 'encenadaport';
        const width = 200;
        const height = 200;
        const outputFilePath = 'dummy_thumb.jpg'

        it('convert image into thumbnail', async () => {
            await imageProcessing.convertImage(filename,height, width, outputFilePath);
            const result = fs.existsSync(outputFilePath);
            expect(result).toBe(true);
        });

        afterAll(async () => {
            await fs.promises.unlink(outputFilePath);
        })
    });

    describe('Test checkFileExist', () => {
        const dummyfile = 'dummy.txt';

        it('Check file does not exist', async () => {
            const res = imageProcessing.checkFileExist(dummyfile);
            expect(res).toBe(false);
        });

        it('Check file exist', async () => {
            await fs.promises.open(dummyfile, 'w+');
            const res = imageProcessing.checkFileExist(dummyfile);
            expect(res).toBe(true);
        });

        afterAll(async() => {
            await fs.promises.unlink(dummyfile);
        })

    });

    describe('Test createThumbnailFolder', () => {
        it('Check thumb folder exist', () => {
            imageProcessing.createThumbnailFolder();
            const result = fs.existsSync(imageProcessing.thumbnailDir);
            expect(result).toBe(true);
        });
    });
})