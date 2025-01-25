import express from "express"
const app = express()
import cors from "cors"
import 'dotenv/config'
import { dbConnect } from "./Config/db.js"
import userRouter from "./routes/userRoute.js"
app.use(express.json())
app.use(cors())

app.use("/api/user",userRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server live on PORT ${process.env.PORT}`)
  dbConnect()
})


// http://localhost:7000/api/user/register
// http://localhost:7000/api/user/login