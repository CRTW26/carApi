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
    expect(response.body.id).toBe(1);
    expect(response.body.make).toBe("ford");
    expect(response.body.model).toBe("fiesta");
    expect(response.body.buildDate).toBe("02/05/2021");
    expect(response.body.colourID).toBe(2);
  });

  test('POST /cars', async () => {
    const response = await request
    .post('/cars')
    .send({ id: 2, make: 'VW', model: 'golf', buildDate: '03/06/2020', colourID: 4 })
    expect(response.statusCode).toBe(200);
    expect(response.body).toBe('Car successfully added')
  });

  test('POST /cars validates buildDate', async () => {
    const response = await request
    .post('/cars')
    .send({ id: 3, make: 'VW', model: 'golf', buildDate: '03/06/2016', colourID: 4 })
    expect(response.statusCode).toBe(200);
    expect(response.body).toBe('Car build date is older than four years')
  });

  test('DELETE /cars/:id', async () => {
    const response = await request
    .delete('/cars/2');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBe('Car deleted');
  });
})