import asyncHandler from "express-async-handler"
import Package from "../models/Package.js"


export const getAllPackages = asyncHandler(async (req, res) => {
    const result = await Package.find({ publish: true })
    res.status(200).json({
        message: "Package Fetch Successs",
        result
    })
})
export const getPackageDetails = asyncHandler(async (req, res) => {
    const { packageId } = req.params
    const result = await Package.findById(packageId)
    res.status(200).json({
        message: "Package Fetch Successs",
        result
    })
})
