import asyncHandler from "express-async-handler"
import User from "../models/User.js"
import Order from "../models/Order.js"




//===============================================================================

export const getAllBookings = asyncHandler(async (req, res) => {
    const result = await User.find()
    res.status(200).json({
        message: "Booking Fetch Successs",
        result
    })
})
//===============================================================================

export const getHistory = asyncHandler(async (req, res) => {
    const result = await Order.find({ userId: req.body.userId })
    res.status(200).json({
        message: "History Fetch Successs",
        result
    })
})
//===============================================================================
