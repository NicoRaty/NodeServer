import { describe, test, expect } from '@jest/globals';
import request from 'supertest';
import app from '../app.js'

describe('Test PUT method with existing data', () => {
    test('It should update existing data and return 200', async () => {
        const updatedData = {
            forename: "Pertti",
            surname: "Eräreikä"
        };
        const response = await request(app)
            .put('/data/2')
            .send(updatedData)
        expect(response.statusCode).toBe(200);
        expect(response.headers['content-type']).toMatch(/json/);
    });
});
