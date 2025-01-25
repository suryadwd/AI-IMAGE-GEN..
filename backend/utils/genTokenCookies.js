import jwt from "jsonwebtoken"
import 'dotenv/config'

export const genTokenCookie =  async (payload, res)  => {

  const token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'7d'})

  res.cookie("jwt",token,{maxAge:7*24*60*60*1000})

}
