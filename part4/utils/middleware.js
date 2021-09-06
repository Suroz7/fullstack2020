const jwt = require('jsonwebtoken')
require('dotenv').config
const tokenExtractor = (request,response,next)=>{
    
    const authorization = request.get('authorization')
    if(authorization&&authorization.toLowerCase().startsWith('bearer')){
        request.token = authorization.substring(7)
    

    }
    else{
        request.token = null
   

    }
    try {
        const decodedtoken = jwt.verify(request.token,process.env.SECRET)
        request.decodedtoken = decodedtoken
    

    } catch (error) {
        request.decodedtoken = null

    }
    next()
}

module.exports = {
    tokenExtractor
}