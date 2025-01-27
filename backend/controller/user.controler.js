import { User } from "../models/user.model.js";
import {Transactions} from "../models/transaction.model.js"
import bcrypt from "bcrypt"
import { genTokenCookie } from "../utils/genTokenCookies.js";
import razorpay from "razorpay"

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

    return res.status(201).json({success:true,message:"user created", user:newUser})

  } catch (error) {
    console.log(error)
    return res.status(500).json({success:false, message:"error in login handler"})
  }

}


export const login = async (req, res) => {

  try {
    
    const {email, password} = req.body

    if(!email||!password) return res.status(400).json({success:false, message:"All fields are required"})

    const existingUser = await User.findOne({email})  

    if(!existingUser) return res.status(400).json({success:false, message:"User does not exist"})

    const isMatch = await bcrypt.compare(password, existingUser.password)

    if(!isMatch) return res.status(400).json({success:false, message:"Password Incorrect"})

    const payload = {id : existingUser._id}

    genTokenCookie(payload, res)

    return res.status(200).json({success:true,message:"Login", user:existingUser})

  } catch (error) {
    console.log(error)
    return res.status(500).json({success:false, message:"error in login handler"})
  }

}


export const balance = async (req, res) => {

    try {
    
      const userId = req.user
      const user = await User.findById(userId)
  
      return res.status(200).json({ a:user.balance})

    } catch (error) {
      console.log(error)
      return res.status(500).json({success:false, message:"error in login handler"})
    }

}

export const logout = async(req, res) => {
  try {
    res
    .cookie("jwt", "", { maxAge: 0 })
    .status(200)
    .json({ success: true, message: "User logged Out" });
  } catch (error) {
    console.log(error)
    return res.status(500).json({success:false, message:"error in logout handler"})
  }
}

const razorpayInstance = new razorpay({
  key_id:process.env.RAZORPAY_KEY_ID ,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
})

export const paymentRazorpay = async(req, res) => {

    try {
      
      const userId = req.user
      const {planId} = req.body
      
      const user = await User.findById(userId)

      if(!user)  return res.status(400).json({success:false,message:"user not found"})

      let credits, plan, amount, date

      switch (planId){

        case "Basic":
          plan = "Basic"
          credits = 100
          amount = 10
          break;

          case "Advanced":
            plan = "Advanced"
            credits = 500
            amount = 50
            break;

            case "Business":
              plan = "Business"
              credits = 5000
              amount = 250
              break;

          default:
            return res.json({success:false, message:"plan not found"});

      }

      const newTrans = await Transactions({
        user:userId, plan, amount, credits
      })

      await newTrans.save()

      const options = {
        amount : amount * 100,
        currency:process.env.CURRENCY,
        receipt:newTrans._id
      }

      await razorpayInstance.orders.create(options, (error, order) => {
        if(error) {console.log(error)
          return res.json({success:false,message:error})}
        else res.json({success:true, order})
      })

    } catch (error) {
      console.log(error)
      res.json({success:false, message:error.message})
    }

}
export const verifyRazorpay = async (req, res) => {
  try {
    const { razorpay_order_id } = req.body;

    const userId = req.user;

    const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id);

    if (!orderInfo) {
      return res.json({ success: false, message: "Order not found" });
    }

    if (orderInfo.status === "paid") {
      const transactionData = await Transactions.findById(orderInfo.receipt);

      if (!transactionData) {
        return res.json({ success: false, message: "Transaction not found" });
      }

      if (transactionData.payment) {
        return res.json({ success: false, message: "Payment already done" });
      }

      // Find the user
      const user = await User.findById(userId);

      if (!user) {
        return res.json({ success: false, message: "User not found" });
      }

      // Parse credits as a number and calculate the new balance
      const creditsToAdd = parseInt(transactionData.credits, 10); // Ensure credits is treated as a number
      const creditBalance = user.balance + creditsToAdd;

      // Update user balance
      await User.findByIdAndUpdate(user._id, { balance: creditBalance }, { new: true });

      // Mark transaction as paid
      await Transactions.findByIdAndUpdate(transactionData._id, { payment: true }, { new: true });

      res.json({ success: true, message: `Credits Added: ${creditsToAdd}` });
    } else {
      res.json({ success: false, message: "Payment not done" });
    }
  } catch (error) {
    console.log("Error in verifyRazorpay:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
