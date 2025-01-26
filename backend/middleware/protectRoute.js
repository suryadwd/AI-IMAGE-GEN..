import jwt from "jsonwebtoken"
import 'dotenv/config'
import { User } from "../models/user.model.js";

export const protect = async(req, res, next)  => {
  try {
    const token = req.cookies.jwt;
    if(!token) return res.status(400).json({success:false, message:"Token not found"})

    const payload = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findOne({_id:payload.id})

    if(!user) return res.status(400).json({success:false, message:"User not found"})

    req.user = user
    next()
  } catch (error) {
    console.log(error)
    return res.status(500).json({success:false, message:"error in protected handler"})
  }
}