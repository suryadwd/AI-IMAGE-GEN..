import express from "express"
import {generateImage} from "../controller/image.controller.js"
import {protect} from "../middleware/protectRoute.js"

const route = express.Router()

route.post('/generateImage',protect,generateImage)

export default route