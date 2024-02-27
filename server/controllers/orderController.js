import asyncHandler from "express-async-handler"
import Order from "../models/Order.js"
import paymentUpload from "../utils/payment.js"
import jwt from "jsonwebtoken"

export const getAllOrders = asyncHandler(async (req, res) => {
    const result = await Order.find()
    res.status(200).json({
        message: "Orders Fetch Successs",
        result
    })
})

export const addOrder = asyncHandler(async (req, res) => {
    paymentUpload(req, res, async err => {
        if (err) {
            res.status(500).json({ error: err.message || "Image Upload ERROR" })
        }
        if (!req.body.packageId || req.body.packageId.length === 0) {
            return res.status(400).json({
                message: "packageId is required"
            })
        }
        const { user } = req.cookies
        jwt.verify(user, process.env.JWT_KEY, (err, decode) => {
            if (err) {
                return res.status(401).json({ error: "Token Missmatched" })
            }
            req.body.userId = decode.userId

        })


        if (req.file) {
            await Order.create({ ...req.body, paymentDoc: req.file.filename })
        } else {
            await Order.create({ ...req.body })

        }
        res.status(200).json({
            message: "Order Add Successs"
        })
    })

})
