import mongoose from "mongoose";
import 'dotenv/config'

export const dbConnect = () => {

  mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to db'))
  .catch((err) => console.log(err));

}