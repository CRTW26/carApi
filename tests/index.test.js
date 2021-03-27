import supertest from 'supertest';
import api from '../src/index';

const request = supertest(api)

describe('api', () => {

  test('GET /cars', async () => {
    const response = await request.get('/cars');
    expect(response.statusCode).toBe(200);
    expect(response.body.cars.length).toEqual(1);
  });

  test('GET /car/:id', async () => {
    const response = await request.get('/car/1');
    expect(response.statusCode).toBe(200);
    console.log(response.body)
    expect(response.body.id).toBe(1);
    expect(response.body.make).toBe("ford");
    expect(response.body.model).toBe("fiesta");
    expect(response.body.buildDate).toBe("02/05/2021");
    expect(response.body.colourID).toBe(2);
  });
})