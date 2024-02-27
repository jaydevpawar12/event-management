import asyncHandler from "express-async-handler"
import User from "../models/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import validator from "validator"


export const registerUser = asyncHandler(async (req, res) => {
    const { email, password, mobile } = req.body
    if (!validator.isEmail(email)) {
        return res.status(400).json({ error: `Invalid Email` })
    }
    if (!validator.isMobilePhone(mobile, "en-IN")) {
        return res.status(400).json({ error: `Invalid Mobile` })
    }

    // if (!validator.isStrongPassword(password)) {
    //     return res.status(400).json({ error: `Weak Password` })
    // }

    const result = await User.findOne({ email })
    if (result) {
        return res.status(500).json({ error: `Email Already Registered` })
    }
    const hash = await bcrypt.hash(password, 10)
    await User.create({ ...req.body, password: hash, role: 'user' })
    res.status(200).json({
        message: "Register Successs",


    })
})
//===============================================================================

export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    if (!validator.isEmail(email)) {
        return res.status(400).json({ error: `Invalid Email` })
    }


    const result = await User.findOne({ email })
    console.log("aaaa", result);
    if (!result) {
        return res.status(500).json({ error: `Email Not Registered` })
    }
    const verify = await bcrypt.compare(password, result.password)
    if (!verify) {
        return res.status(500).json({ error: `Invalid Password` })
    }
    const token = jwt.sign({ userId: result._id }, process.env.JWT_KEY, { expiresIn: "1h" })
    res.cookie("user", token, { httpOnly: true })
    res.status(200).json({
        message: "Login Successs",
        result: {
            name: result.name,
            email: result.email,
            role: result.role
        }
    })
})

export const logoutUser=asyncHandler(async(req, res)=>{
    res.clearCookie("user")
    res.status(200).json({
        message: "Logout Successs"
    })
})