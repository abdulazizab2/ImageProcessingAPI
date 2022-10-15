import app from '../index';
import supertest from 'supertest';

describe('testing endpoint of /', () => {
  it('expect GET / endpoint statusCode to be 404', async () => {
    const result = await supertest(app).get('/');
    expect(result.statusCode).toBe(404);
  });
});

describe('testing endpoints of /api', () => {
  it('expect GET /api statusCode endpoint to be 200 (OK)', async () => {
    const result = await supertest(app).get('/api');
    expect(result.statusCode).toBe(200);
  });
  it('expect GET /api endpoint text to be "main api page"', async () => {
    const result = await supertest(app).get('/api');
    expect(result.text).toBe('Main API Page');
  });
});

describe('testing endpoints of /api/images', () => {
  it('expect GET /api/images?filename=santamonica&width=400&height=300 statusCode to be 200 (OK)', async () => {
    const result = await supertest(app).get(
      '/api/images?filename=santamonica&width=400&height=300'
    );
    expect(result.statusCode).toBe(200);
  });
  it('expect GET /api/images?filename=foo&width=400&height=300 statusCode to be 404', async () => {
    const result = await supertest(app).get(
      '/api/images?filename=foo&width=400&height=300'
    );
    expect(result.statusCode).toBe(404);
  });
  it('expect GET /api/images?filename=santamonica statusCode to be 404', async () => {
    const result = await supertest(app).get('/api/images?filename=santamonica');
    expect(result.statusCode).toBe(404);
  });
  it('expect GET /api/images?filename=santamonica text to be "width and/or height are not passed in the query!"', async () => {
    const result = await supertest(app).get('/api/images?filename=santamonica');
    expect(result.text).toBe(
      'width and/or height are not passed in the query!'
    );
  });
});
