import app from '../index'
import supertest from 'supertest'

describe('testing api endpoints', ()=>{
    it('main api page', async ()=>{
        const result = await supertest(app).get('/')
        expect(result.statusCode).toBe(200)
    })
})