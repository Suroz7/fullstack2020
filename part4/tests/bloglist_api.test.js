const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
test('Blogs are returned as json',async ()=>{
    await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type',/application\/json/)


})
test('Bolgs have length of 3',async ()=>{
   const response =  await api.get('/api/blogs')
    expect(response.body).toHaveLength(3)
},100000)
test('Blogs have unique identifier as id',async()=>{
    const response = await api.get('/api/blogs')
    expect(response.body[0]._id).toBeDefined()
})
afterAll(()=>{
    mongoose.connection.close()
})