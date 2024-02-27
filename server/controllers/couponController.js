import Coupon from "../models/Coupon.js"
import asyncHandler from "express-async-handler"
export const getAllCoupons = asyncHandler(async (req, res) => {
    const result = await Coupon.find()
    res.status(200).json({
        message: "Coupon Fetch Successs",
        result
    })
})