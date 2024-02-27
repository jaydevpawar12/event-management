import { Router } from "express"
import { getAllBookings, getHistory } from "./../controllers/userController.js"
import { protectedRoute } from "../middlewares/privateRoute.js"

const router = Router()

router

    .get("/booking", getAllBookings)
    .get("/history", protectedRoute, getHistory)


export default router