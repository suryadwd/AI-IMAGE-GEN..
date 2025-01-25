import { User } from "../models/user.model.js";
import bcrypt from "bcrypt"
import { genTokenCookie } from "../utils/genTokenCookies.js";


export const register = async (req, res) => {

  try {
    
    const {name, email, password} = req.body

    if(!name||!email) return res.status(400).json({success:false, message:"All fields are required"})

    if(password.length < 6 ||!password ) return res.status(400).json({success:false, message:"Passwors must be  greater then 6 character"})

    const existingUser = await User.findOne({email})  

    if(existingUser) return res.status(400).json({success:false, message:"User already registered"})

    const hashPass = await bcrypt.hash(password,12)

    const newUser = new User({name,email,password:hashPass})

    await newUser.save()

    const payload = {id : newUser._id}

    genTokenCookie(payload, res)

    return res.status(201).json({success:true,message:"user created"})

  } catch (error) {
    console.log(error)
    return res.status(500).json({success:false, message:"error in login handler"})
  }

}


export const login = async (req, res) => {

  try {
    
    const {email, password} = req.body

    if(!email||!password) return res.status(400).json({success:false, message:"All fields are required"})

    if(password.length < 6 ||!password ) return res.status(400).json({success:false, message:"Passwors must be  greater then 6 character"})

    const existingUser = await User.findOne({email})  

    if(!existingUser) return res.status(400).json({success:false, message:"User does not exist"})

    const isMatch = await bcrypt.compare(password, existingUser.password)

    if(!isMatch) return res.status(400).json({success:false, message:"Password Incorrect"})

    const payload = {id : existingUser._id}

    genTokenCookie(payload, res)

    return res.status(200).json({success:true,message:"Login", newUser})

  } catch (error) {
    console.log(error)
    return res.status(500).json({success:false, message:"error in login handler"})
  }

}

