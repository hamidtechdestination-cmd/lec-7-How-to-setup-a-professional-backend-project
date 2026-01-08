import mongoose , {Schwma} from "mongoose";

import jwt from "jsonwebtoken"
import bcrypt, { compare } from "bcrypt"
const userschema=new Schwma({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true      //ek field ko serachabale banana optimize traike se mongodb me to index kr do
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
              
    },
    fullname:{
        type:String,
        required:true,
        trim:true,
        index:true      
    },
    avatar:{
        type:String,
        required:true,    //cloudinary
         
    },
    coverimage:{
        type:String,    
    },
    watchhistory:[
        {
            type:Schema.Types.ObjectId,
            ref:"Video"
        }
    ],
    password:{
        type:String,
        required:[true,'password is required']
    },
    refreshtoken:{
        type:String,
    },

},
{
    timestamps:true
}
)

   // password ko encrypt krta hai 
    //    data save hone se pehle ye function chale isi liye pre use krte hai 
userschema.pre("save",async function(next){
    if(!this.ismodified("password")) return next();
    this.password= await bcrypt.hash(this.password,10)
    next()
})
        // pasword ko chek krta hai compare kr ke 
userschema.methods.ispasswordcorrect=async function(password){
    return await bcrypt.compare(password,this.password)
}
                 //jwt tokens
import jwt from "jsonwebtoken";

userschema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    );
};

userschema.methods.generaterefreshtoken=function(){
     return jwt.sign(
        {
            _id: this._id,
         
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    );
}


export const User=mongoose.model("User",userschema)