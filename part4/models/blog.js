const mongoose = require('mongoose')
const blogModel = new mongoose.Schema({
    title:String,
    author:String,
    url:String,
    like:Number
})

module.exports = mongoose.model('Blog',blogModel)