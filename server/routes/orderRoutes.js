import { Router } from "express"
import { addOrder, getAllOrders } from "./../controllers/orderController.js"

const router = Router()

router
    .get("/", getAllOrders)
    .post("/add", addOrder)

export default router