const blogRouter = require('express').Router()
const Blog = require('../models/blog')
const logger = require('../utils/logger')
const user = require('../models/user')


blogRouter.get('/api/blogs',async (request,response)=>{
   try {
       const blogs = await Blog.find({}).populate('user',{username:1,name:1})
       return response.status(200).json(blogs)
   } catch (error) {

       logger.error(error.message)
   }
    
})
blogRouter.post('/api/blogs',async (request,response)=>{
    const users =  await user.find({})

    const body = request.body
    if(!body.title||!body.url){
        return response.status(400).send('Bad Request')
    }
    const newBlog = new Blog({
        title:body.title,
        author:body.author,
        url:body.url,
        like:body.like||0,
        user:users[0].id
    })
    try {
        const savedBlog = await newBlog.save()
        users[0].blog = users[0].blog.concat(savedBlog.id)
        await users[0].save()
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