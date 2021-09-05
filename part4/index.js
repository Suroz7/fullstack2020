const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
app.use(cors())
app.use(express.json())
const url='mongodb+srv://suroz:fullstack2020@cluster0.ttuc2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
console.log(`Connecting to Mongo DB with ${url}....`)
mongoose.connect(url)
.then(()=>console.log('Connected To MongoDB'))
.catch((error)=>console.log(`Couldn't connect due to ${error.message}`))
const blogModel = new mongoose.Schema({
    title:String,
    author:String,
    url:String,
    likes:Number
})
const Blog = mongoose.model('Blog',blogModel)

app.get('/api/blogs',(request,response)=>{
    Blog.find({})
    .then(blogs=>response.status(200).json(blogs))
})
app.post('/api/blogs',(request,response)=>{
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

const PORT = process.env.PORT||3001
app.listen(PORT,()=>{
    console.log(`Server Running on  port ${PORT}`)
})