import asyncHandler from "express-async-handler"
import imageUpload from "../utils/upload.js"

import User from "../models/User.js"
import Package from "../models/Package.js"
import Coupon from "../models/Coupon.js"
import Order from "../models/Order.js"
import Reviews from "../models/Reviews.js"
import Contact from "../models/Contact.js"
import Cms from "../models/Cms.js"
import logoUpload from "../utils/logo.js"
import caroselUpload from "../utils/carouselimg.js"
import Carousel from "../models/Carousel.js"


// user start
export const getAllusers = asyncHandler(async (req, res) => {
    const result = await User.find({ role: "user" })
    res.status(200).json({
        message: "User Fetch Successs",
        result
    })
})
export const deactivateUser = asyncHandler(async (req, res) => {
    const { id } = req.params
    await User.findByIdAndUpdate(id, { active: false })
    res.status(200).json({
        message: "User Account De-acivate Successs",
    })
})
export const activateUser = asyncHandler(async (req, res) => {
    const { id } = req.params
    await User.findByIdAndUpdate(id, { active: true })
    res.status(200).json({
        message: "User Account Acivate Successs",
    })
})
// user end



// ========================================================
// package start
export const getAllPackages = asyncHandler(async (req, res) => {
    const result = await Package.find()
    res.status(200).json({
        message: "Package Fetch Successs",
        result
    })
})

export const addPackage = asyncHandler(async (req, res) => {

    imageUpload(req, res, async err => {
        if (err) {
            return res.status(500).json({ error: err.message || "Image Upload ERROR" })
        }
        console.log(req.files)
        const heroImages = []
        for (const item of req.files) {
            heroImages.push(item.filename)
        }
        console.log(heroImages);
        await Package.create({ ...req.body, hero: heroImages })
        res.status(200).json({ message: "Image Upload successful" })
    })
})

export const updatePackage = asyncHandler(async (req, res) => {
    const { id } = req.params
    await Package.findByIdAndUpdate(id, req.body)
    res.status(200).json({
        message: "Package Update Successs"
    })
})

// ========================================================
// package end



// coupon start
//  =========================================================
export const getAllCoupons = asyncHandler(async (req, res) => {
    const result = await Coupon.find()
    res.status(200).json({
        message: "Coupon Fetch Successs",
        result
    })
})
export const addCoupon = asyncHandler(async (req, res) => {
    await Coupon.create(req.body)
    res.status(201).json({
        message: "Coupon Create Successs",
    })
})
export const updateCoupon = asyncHandler(async (req, res) => {
    const { id } = req.params
    await Coupon.findByIdAndUpdate(id, req.body)
    res.status(200).json({
        message: "Coupon Update Successs",
    })
})

//  =========================================================
// coupon end

// order start
// ==========================================================
export const getAllOrders = asyncHandler(async (req, res) => {
    const result = await Order.find()
    res.status(200).json({
        message: "Orders Fetch Successs",
        result
    })
})
export const updateOrder = asyncHandler(async (req, res) => {
    const { id } = req.params
    await Order.findByIdAndUpdate(id, req.body)
    res.status(200).json({
        message: "Order Update Successs"
    })
})
// ==========================================================
// order end


// review start
// ==========================================================
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
export const deleteReview = asyncHandler(async (req, res) => {
    const { id } = req.params
    await Reviews.findByIdAndDelete(id)
    res.status(200).json({
        message: "Reviews Delete Successs",
    })
})
// ==========================================================
// review end


// contact start
export const getContact = asyncHandler(async (req, res) => {
    const result = await Contact.find().sort({ createdAt: "descending" })
    res.status(200).json({
        message: "Conatct Create Successs",
        result
    })
})

// contact end



//cms start
export const getCms = asyncHandler(async (req, res) => {
    const result = await Cms.find()
    res.status(200).json({
        message: "cms Fetch Successs",
        result
    })
})

export const addCms = asyncHandler(async (req, res) => {
    logoUpload(req, res, async err => {
        if (err) {
            return res.status(500).json({ error: err.message || "Image Upload ERROR" })
        }
        if (req.file) {
            await Cms.create({ ...req.body, logo: req.file.filename })
        } else {
            await Cms.create({ ...req.body })

        }
        // console.log(req.file.filename)
        // // const logoImages = []s
        // // logoImages.push()
        // console.log(logoImages);
        // await Cms.create({ ...req.body, logo: req.file.filename })
        // // await Package.create({ ...req.body, hero: heroImages })
        res.status(200).json({ message: "Image Upload successful" })
    })
    // console.log(req.body);
    // res.status(201).json({
    //     message: "Cms Added Successs",
    // })

})

export const DeleteCms = asyncHandler(async (req, res) => {
    const { id } = req.params
    await Cms.findByIdAndDelete(id)
    res.status(200).json({
        message: "Cms Deleted Successs",
    })
})

//carousel start
export const getCarousel = asyncHandler(async (req, res) => {
    const result = await Carousel.find()
    res.status(200).json({
        message: "Carousel Fetch Successs",
        result
    })
})
export const addCarousel = asyncHandler(async (req, res) => {
    caroselUpload(req, res, async err => {
        if (err) {
            return res.status(500).json({ error: err.message || "Image Upload Error" })
        }
        console.log(req.body);
        if (req.file) {
            await Carousel.create({ ...req.body, image: req.file.filename })
        } else {
            await Carousel.create({ ...req.body })
        }
        res.status(200).json({
            message: "Carousel Fetch Successs",
        })
    })
})
export const deleteCarousel = asyncHandler(async (req, res) => {
    const { id } = req.params
    await Carousel.findByIdAndDelete(id)
    res.status(200).json({
        message: "Carousel Deleted Successs",
    })
})

