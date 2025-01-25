import express from "express"
const app = express()
import cors from "cors"
import 'dotenv/config'
import { dbConnect } from "./Config/db.js"
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT, () => {
  console.log(`Server live on PORT ${process.env.PORT}`)
  dbConnect()
})