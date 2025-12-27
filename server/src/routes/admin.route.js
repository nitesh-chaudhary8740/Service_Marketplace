import express from "express"
const adminRouter = express.Router()
adminRouter.route("/create-service").post()
export default adminRouter