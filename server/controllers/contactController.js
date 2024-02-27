import Contact from "../models/Contact.js"
import asyncHandler from "express-async-handler"

export const addContact = asyncHandler(async (req, res) => {
    await Contact.create(req.body)
    res.status(200).json({
        message: "Conatct Create Successs",
    })
})