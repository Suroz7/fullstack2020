const userRouter = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const logger = require('../utils/logger')
userRouter.post('',async(request,response)=>{
    const {name,username,password} = request.body
    logger.info("Helo bro")
    if(!name||!username||!password) {
        return response.status(400).send('Please provide all credentials')
    }
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password,saltRounds)
    const user = new User({
        username:username,
        name:name,
        password:passwordHash

    })
    try {
        const savedUser = await user.save()
        return response.status(200).json(savedUser)
    } catch (error) {

        logger.error(error.message)
        return response.status(500).send(`${error.message}`)
    }
})
userRouter.get('',async(request,response)=>{
    try {
       const users = await User.find({}).select('-password')
       return response.status(200).json(users)

    } catch (error) {
        logger.error(error.message)
        return response.status(500).send('Internal Server Error')
        
    }
})
module.exports = userRouter