import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
describe('Test endpoint responses', () => {
    it('Home Page endpoint', async () => {
        const response = await request.get('/api');
        expect(response.status).toBe(200);
    }
    
)

    it('images endpoint without filename', async () => {
        const response = await request.get('/api/images');
        expect(response.status).toBe(400);
    }
)

    it('images endpoint with filename', async() => {
        const response = await request.get('/api/images?filename=encenadaport');
        expect(response.status).toBe(200);
    }
)
});