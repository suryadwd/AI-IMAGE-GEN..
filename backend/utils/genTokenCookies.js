import jwt from "jsonwebtoken"
import 'dotenv/config'

export const genTokenCookie =  async (payload, res)  => {

  const token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'7d'})

  res.cookie("jwt", token, {
    httpOnly: true, // Makes the cookie inaccessible to JavaScript
    secure: process.env.NODE_ENV === "production", // Only over HTTPS in production
    sameSite: "lax", // Adjust according to your cross-site request behavior
    maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week
  });

}
