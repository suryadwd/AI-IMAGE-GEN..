import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

  name:{
    type:String
  },
  email:{
    type:String
  },
  password:{
    type:String
  },
  balance:{
    type:Number,
    default:5
  }

},{timestamps:true})

export const User = mongoose.model("User",userSchema)