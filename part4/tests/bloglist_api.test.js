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
test('Bolgs have length of 10',async ()=>{
   const response =  await api.get('/api/blogs')
    expect(response.body).toHaveLength(0)
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
test('if like not found it will be 0',async()=>{
    const newBlog ={
        title:"wtf is gn onse",
        author:"like check",
        url:"like check",
    }
    await api.post('/api/blogs')
    .send(newBlog)
    .expect(200)
    .expect('Content-Type',/application\/json/)
    const allblog = await api.get('/api/blogs')
    const newlikechecker = await allblog.body.find(blog=>blog.title==="wtf is gn onse")
    expect(newlikechecker.like).toBe(0)
},1000000)
test('return 400 if title or url not found',async()=>{
    const newBlog ={
        title:"hello",
        author:"like check",
    }
    await api.post('/api/blogs')
    .send(newBlog)
    .expect(400)
},10000)
afterAll(()=>{
    mongoose.connection.close()
})