import axios from "axios"
import {User} from "../models/user.model.js"
import FormData from 'form-data'
import 'dotenv/config'

  export const generateImage = async (req, res) => {
    try {
      
      const userId = req.user
      const {prompt} = req.body

      const user = await User.findById(userId)

      if(!user) return res.status(400).json({success:false, message:"User not found"})

      if(!prompt) return res.status(400).json({success:false, message:"Prompt not found"})

      if(user.balance === 0 || user.balance < 0)  return res.json({success:false, message:"Insufficent balance"})

        const formData = new FormData()
        formData.append('prompt',prompt)

      const {data} = await axios.post("https://clipdrop-api.co/text-to-image/v1", formData, {
        headers:{
          "x-api-key":process.env.IMG_API,
        },
        responseType:'arraybuffer'
      })

      const base64Image = Buffer.from(data, 'binary').toString('base64')
      const resultImage = `data:image/png;base64,${base64Image}`

      const userUpdate = await User.findByIdAndUpdate(user._id, {balance:user.balance-1},{new: true})

      res.json({success:true, message:"Image Generated", balance:userUpdate.balance, resultImage})

    } catch (error) {
      console.log(error)
      return res.status(500).json({success:false, message:"error in imggen handler"})
    }
}

//4 43 