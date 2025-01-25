import { User } from "../models/user.model.js";
import bcrypt from "bcrypt"
import { genTokenCookie } from "../utils/genTokenCookies.js";


export const register = async (req, res) => {

  try {
    
    const {name, email, password} = req.body

    if(!name||!email||!password) return res.status(400).json({success:false, message:"All fields are required"})

    const existingUser = await User.findOne({email})  

    if(existingUser) return res.status(400).json({success:false, message:"User already registered"})

    const hashPass = await bcrypt.hash(password,12)

    const newUser = new User({name,email,password:hashPass})

    newUser.save()

    const payload = {id : newUser._id}

    genTokllenCookie(payload, res)

    return res.status(201).json({success:true,message:"user created", newUser})

  } catch (error) {
    return res.status(500).json({success:false, message:"error in login handler"})
    console.log(error)
  }

}
