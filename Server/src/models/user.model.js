import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        unique : [true,"username already exist" ],
        required : [true , "Username cant be empty"]
    },
    email : {
        type : String,
        unique :[true,"email already exist" ],
        required : [true , "email cant be empty"]
    },
    password : {
        type : String,
        required : [true , "password cant be empty"],
        minlength : [3 , 'password must be atleast 6 characters long']
    }
})

const userModel = mongoose.model('users',userSchema)

export default userModel;