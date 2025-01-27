import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({

  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  plan: {
    type:String,
  },
  amount: {
    type:String,
  },
  credits: {
    type:String,
  },
  payment: {
    type:Boolean,
    default:false,
  },
  date:{
    type:Date,
    default:Date.now()
  }

},{timestamps:true})

export const Transactions = mongoose.model("Transactions",transactionSchema)