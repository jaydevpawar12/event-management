import expressAsyncHandler from "express-async-handler"
import Cms from "../models/Cms.js"
import Carousel from "../models/Carousel.js"

export const getCms = expressAsyncHandler(async (req, res) => {
    const result = await Cms.find()
    res.status(200).json({
        message: "cms Fetch Successs",
        result
    })
})
export const getCarousel = expressAsyncHandler(async (req, res) => {
    const result = await Carousel.find()
    res.status(200).json({
        message: "cms Fetch Successs",
        result
    })
})