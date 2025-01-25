import express from "express";
import { register, login, balance,  } from "../controller/user.controler.js";
import {protect} from "../middleware/protectRoute.js"
const route = express.Router()

route.post("/register",register)
route.post("/login",login)
route.post("/balance",protect,balance)

export default route
