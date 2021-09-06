const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        minlength:5,
        required:true
    },
    username:{
        type:String,
        minlength:5,
        required:true,
        unique:true
    },
    password:{
        type:String,
        minlength:8,
        required:true
    }
})

module.exports = mongoose.model('User',UserSchema)