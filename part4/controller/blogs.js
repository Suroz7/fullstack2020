const blogRouter = require('express').Router()
const Blog = require('../models/blog')


blogRouter.get('/api/blogs',(request,response)=>{
    Blog.find({})
    .then(blogs=>response.status(200).json(blogs))
})
blogRouter.post('/api/blogs',async (request,response)=>{
    const body = request.body
    const newBlog = new Blog({
        title:body.title,
        author:body.author,
        url:body.url,
        like:body.like||0
    })
    newBlog.save()
    .then((newblog)=>response.status(200).json(newblog))
    .catch((error)=>response.status(500).json({error:error.message}))
})
module.exports = blogRouter