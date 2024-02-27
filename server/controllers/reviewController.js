import Reviews from "../models/Reviews.js"
import asyncHandler from "express-async-handler"
export const getAllReviews = asyncHandler(async (req, res) => {
    const result = await Reviews.find()
    res.status(200).json({
        message: "Reviews Fetch Successs",
        result
    })
})
export const addReview = asyncHandler(async (req, res) => {
    await Reviews.create(req.body)
    res.status(201).json({
        message: "Reviews Create Successs",
    })
})
export const updateReview = asyncHandler(async (req, res) => {
    const { id } = req.params
    await Reviews.findByIdAndUpdate(id, req.body)
    res.status(200).json({
        message: "Reviews Update Successs",
    })
})
