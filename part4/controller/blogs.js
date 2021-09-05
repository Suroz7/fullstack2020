const blogRouter = require('express').Router()
const Blog = require('../models/blog')

blogRouter.get('/api/blogs',(request,response)=>{
    Blog.find({})
    .then(blogs=>response.status(200).json(blogs))
})
blogRouter.post('/api/blogs',(request,response)=>{
    const newBlog = new Blog({
        title:request.body.title,
        author:request.body.author,
        url:request.body.url,
        like:request.body.like
    })
    newBlog.save()
    .then((newblog)=>response.status(200).json(newblog))
    .catch((error)=>response.status(500).json({error:error.message}))
})
module.exports = blogRouter