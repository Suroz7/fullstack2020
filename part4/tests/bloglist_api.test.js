const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')
test('Blogs are returned as json',async ()=>{
    await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type',/application\/json/)


},10000)
test('Bolgs have length of 9',async ()=>{
   const response =  await api.get('/api/blogs')
    expect(response.body).toHaveLength(9)
},100000)
test('Blogs have unique identifier as id',async()=>{
    const response = await api.get('/api/blogs')
    expect(response.body[0]._id).toBeDefined()
})
test('Addition of New Blog',async()=>{
    const newBlog = {
        title:"testing blog",
        author:"tester",
        url:"testing url",
        likes:123
    }
    const initialBlogs = await api.get('/api/blogs')
    const initialLength = initialBlogs.body.length
    await api.post('/api/blogs')
    .send(newBlog)
    .expect(200)
    .expect('Content-Type',/application\/json/)
    const newBlogs = await api.get('/api/blogs')
    expect(newBlogs.body).toHaveLength(initialLength+1)
    

},10000)
afterAll(()=>{
    mongoose.connection.close()
})