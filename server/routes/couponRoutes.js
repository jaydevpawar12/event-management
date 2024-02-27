import { Router } from "express"
import { getAllCoupons } from "../controllers/couponController.js"

const router = Router()

router.get("/", getAllCoupons)

export default router