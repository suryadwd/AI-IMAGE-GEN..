import express from "express"
const app = express()
import cookieParser from 'cookie-parser';
import cors from "cors"
import 'dotenv/config'
import { dbConnect } from "./Config/db.js"
import userRouter from "./routes/userRoute.js"
import imageRouter from "./routes/imageRoute.js"
app.use(express.json())
app.use(cors())
app.use(cookieParser());
app.use("/api/user",userRouter)
app.use("/api/image",imageRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server live on PORT ${process.env.PORT}`)
  dbConnect()
})


// http://localhost:7000/api/user/register
// http://localhost:7000/api/user/login