import userModel from "../models/user.model.js";
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from "../config/config.js";
import bcrypt from 'bcrypt'


export async function registerUser(req,res) {
   try {
     const {username , email , password} = req.body;
 
     if(!username){
         return res.status(400).json({message : "Username is Required"})
     }
     if(!email){
         return res.status(400).json({message : "Email is Required"})
     }
     if(!password){
         return res.status(400).json({message : "Password is Required"})
     }
 
     const isAlreadyExist = await userModel.findOne({email})
 
     if(isAlreadyExist){
         return res.status(409).json({message : "User Already Exist Please LogIn"})
     }
 
     const passwordHash = await bcrypt.hash(password , 10)
 
     const user = await userModel.create({
         username,
         email,
         password: passwordHash
     })
 
     const token = jwt.sign({_id :  user.id},JWT_SECRET,{expiresIn : "7d"})

     res.cookie("token", token, {
        httpOnly : true,
     })
 
     res.status(201).json({
         message : "User Created SuccessFully",
         user:{
             id :user._id,
             username : user.username,
             email : user.email,
         },
         token
     })
   } catch (error) {
    return res.status(500).json({message : "Something Went Wrong",})
   }


}

export async function loginUser(req , res) {
    const {email , password} = req.body
     
    if(!email || !password){
        return res.status(400).json({message : "Email and Password are Required"})
    }


    const user = await userModel.findOne({email})
    if(!user ){
        return res.status(401).json({
            message : "invalid Email or Password"
        })
    }

    const isMatched = await bcrypt.compare(password , user.password)
    if(!isMatched ){
        return res.status(401).json({
            message : "Password is Incorrect"
        })
    }

    const token = jwt.sign({id : user._id},JWT_SECRET,{expiresIn : "7d"})
    res.cookie("token",token ,{
        httpOnly : true
    })

    return res.status(200).json({
        message:"Logged In Successfully",
        user:{
            id : user._id,
            email : user.email,
            username : user.username,
        },
        token,
    })
}

export async function getMe(req,res) {
    const user = req.user;
    if(!user){
        return res.status(401).json({message : "Unauthorized"})
    }

    return res.status(200).json({
        message : "User Fetched Successfully",
        user : {
            id : user._id,
            username : user.username,
            email : user.email
        }
    })
}

export  function logout(req,res) {
    try {
        const token = req.cookies.token;
    
        if(!token){
            return res.status(401).json({message : "please Login first"})
        }
        res.clearCookie("token")
        return res.status(200).json({
            message : "Logout SuccessFull"
        })

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            message  : "Something Went Wrong"
        })
    }
}