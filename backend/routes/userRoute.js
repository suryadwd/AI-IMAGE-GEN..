import express from "express";
import { register, login, balance, logout,  } from "../controller/user.controler.js";
import {protect} from "../middleware/protectRoute.js"
const route = express.Router()

route.post("/register",register)
route.post("/login",login)
route.post("/balance",protect,balance)
route.post("/logout",logout)

export default route
