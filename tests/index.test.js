import supertest from 'supertest';
import api from '../src/index';

const request = supertest(api)

describe('api', () => {

  test('GET /cars', async () => {
    const response = await request.get('/cars');
    expect(response.statusCode).toBe(200);
    expect(response.body.cars.length).toEqual(1);
  });
})