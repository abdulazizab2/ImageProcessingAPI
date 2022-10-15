import app from '../index';
import supertest from 'supertest';

describe('testing endpoint of /', () => {
  it('expect / endpoint statusCode to be 404', async () => {
    const result = await supertest(app).get('/');
    expect(result.statusCode).toBe(404);
  });
});

describe('testing endpoints of /api', () => {
  it('expect /api statusCode endpoint to be 200 (OK)', async () => {
    const result = await supertest(app).get('/api');
    expect(result.statusCode).toBe(200);
  });
  it('expect /api endpoint text to be "main api page"', async () => {
    const result = await supertest(app).get('/api');
    expect(result.text).toBe('Main API Page');
  });
});
