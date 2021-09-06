const blogRouter = require('express').Router()
const { response } = require('express')
const Blog = require('../models/blog')
const logger = require('../utils/logger')


blogRouter.get('/api/blogs',async (request,response)=>{
   try {
       const blogs = await Blog.find({})
       return response.status(200).json(blogs)
   } catch (error) {

       logger.error(error.message)
   }
    Blog.find({})
    .then(blogs=>response.status(200).json(blogs))
})
blogRouter.post('/api/blogs',async (request,response)=>{
    const body = request.body
    if(!body.title||!body.url){
        return response.status(400).send('Bad Request')
    }
    const newBlog = new Blog({
        title:body.title,
        author:body.author,
        url:body.url,
        like:body.like||0
    })
    try {
        const savedBlog = await newBlog.save()
        return response.status(200).json(savedBlog.toJSON())

    } catch (error) {
        logger.error(error.message)
        return response.status(500).send('Internal Server error')
        
    }
})
blogRouter.delete('/api/blogs/:id',async (request,response)=>{
    try {
        await Blog.findByIdAndDelete(request.params.id)
        return response.status(200).send('Blog Deleted')
    } catch (error) {
        logger.error(error.message)
        return response.status(500).send('Internal Server error')
        
    }
})

blogRouter.put('/api/blogs/:id',async(request,response)=>{
    try {
        const blog = await Blog.findById(request.params.id)
        const {title,author,url,like} = request.body
        blog.title=title||blog.title
        blog.author=author||blog.author
        blog.url=url||blog.url
        blog.like=like||blog.like
        const res = await blog.save()
        return response.status(200).json(res.toJSON())
    } catch (error) {

        logger.error(error.message)
        return response.status(500).send('Internal Server error')

    }
})
module.exports = blogRouter