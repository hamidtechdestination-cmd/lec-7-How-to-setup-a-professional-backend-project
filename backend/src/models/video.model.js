import mongoose,{Schema} from "mongoose";
import mongooseaggregatepaginate from "mongoose-aggregate-paginate-v2"

const videoschema=new Schema({
videofile:{
    type:String,  //cloudinary url
    required:true
},
thumnail:{
    type:String,  
    required:true
},
title:{
    type:String,  
    required:true
},
description:{
    type:String,  
    required:true
},
duration:{
    type:Number,  
    required:true
},
views:{
    type:Number,  
    default:0             //koeb video dekhe to views a hi jate hai 
},
ispublished:{
    type:Boolean,      //ke video ko publish krna ke ni 
    default:true
},
owner:{
   type:Schema.Types.ObjectId,
   ref:"User"
}

},
{
    
    timestamps:true
},
)


videoschema.plugin(mongooseaggregatepainate)
export const Video=mongoose.model("Video",videoschema)