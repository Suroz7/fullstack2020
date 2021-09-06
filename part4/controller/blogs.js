const blogRouter = require('express').Router()
const Blog = require('../models/blog')
const logger = require('../utils/logger')
const user = require('../models/user')
const jwt = require('jsonwebtoken')

const checktoken = (request)=>{
    const auth = request.get('authorization')
    if(auth&&auth.toLowerCase().startsWith('bearer')){
        return auth.substring(7)
    }
    return null
}
blogRouter.get('/api/blogs',async (request,response)=>{
   try {
       const blogs = await Blog.find({}).populate('user',{username:1,name:1})
       return response.status(200).json(blogs)
   } catch (error) {

       logger.error(error.message)
   }
    
})
blogRouter.post('/api/blogs',async (request,response)=>{
    const body = request.body
    const token = checktoken(request)
    if(!token){
        return response.status(401).json({error:'Not Authorized'})
    }
    const deceoded = jwt.verify(token,process.env.SECRET)
    if(!deceoded){
        return response.status(401).json({error:'Not Authorized'})
    }
    const users = await user.findById(deceoded.id) 
    if(!body.title||!body.url){
        return response.status(400).send('Bad Request')
    }
    const newBlog = new Blog({
        title:body.title,
        author:body.author,
        url:body.url,
        like:body.like||0,
        user:users.id
    })
    try {
        const savedBlog = await newBlog.save()
        users.blog = users.blog.concat(savedBlog.id)
        await users.save()
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