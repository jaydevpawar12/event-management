import asyncHandler from "express-async-handler"
import validator from "validator"
import jwt from "jsonwebtoken"
import User from "../models/User.js"

export const protectedRoute = asyncHandler((req, res, next) => {
    const { user } = req.cookies
    if (!user) {
        return res.status(401).json({ error: "No Cookie Found" })
    }
    if (!validator.isJWT(user)) {
        return res.status(401).json({ error: "INVALID Token" })
    }
    jwt.verify(user, process.env.JWT_KEY, (err, decode) => {
        if (err) {
            return res.status(401).json({ error: "Token Missmatched" })
        }
        req.body.userId = decode.userId

        next()
    })

})



export const adminProtectedRoute = asyncHandler((req, res, next) => {
    const { user } = req.cookies
    if (!user) {
        return res.status(401).json({ error: "No Cookie Found" })
    }
    if (!validator.isJWT(user)) {
        return res.status(401).json({ error: "INVALID Token" })
    }
    jwt.verify(user, process.env.JWT_KEY, async (err, decode) => {
        if (err) {
            return res.status(401).json({ error: "Token Missmatched" })
        }
        const result = await User.findById(decode.userId)
        if (result.role !== "admin") {
            return res.status(401).json({ error: "Admin Only Route" })
        }
        req.body.userId = decode.userId
        next()
    })

})