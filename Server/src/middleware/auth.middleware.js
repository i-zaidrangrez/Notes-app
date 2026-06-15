import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/config.js'
import userModel from '../models/user.model.js'

export async function getMeMiddleware(req,res,next) {
    try {
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({
                message : "Unauthorized"
            })
        }
        const decoded = jwt.verify(token , JWT_SECRET)
        if(!decoded){
            return res.status(401).json({message:"unauthorized"})
        }
        const user = await userModel.findById(decoded.id)
        if(!user){
            return res.status(404).json({message  :"User Not Found"})
        }
    
        req.user = user
    
        next()
    } catch (error) {
        return res.status(400).json({message: "Something went wrong"})
    }
}
