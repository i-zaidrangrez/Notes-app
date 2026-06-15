import env from 'dotenv'
env.config()

export const MONGO_URI = process.env.MONGO_URI
if(!MONGO_URI){
    res.status(409).json({
        message : "URI dont find"
    })
}

export const JWT_SECRET = process.env.JWT_SECRET
if(!JWT_SECRET){
    res.status(409).json({
        message : "JWTSecret dont find"
    })
}