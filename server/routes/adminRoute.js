import { Router } from "express"
import { DeleteCms, activateUser, addCarousel, addCms, addCoupon, addPackage, addReview, deactivateUser, deleteCarousel, deleteReview, getAllCoupons, getAllOrders, getAllPackages, getAllReviews, getAllusers, getCarousel, getCms, getContact, updateCoupon, updateOrder, updatePackage, updateReview } from "../controllers/adminController.js"
const router = Router()

router
    .get("/user", getAllusers)
    .put("/user/deactivate/:id", deactivateUser)
    .put("/user/activate/:id", activateUser)

    .get("/packages", getAllPackages)
    .post("/packages/add", addPackage)
    .put("/packages/update/:id", updatePackage)

    .get("/coupon", getAllCoupons)
    .post("/coupon/add", addCoupon)
    .put("/coupon/update/:id", updateCoupon)

    .get("/order", getAllOrders)
    .put("/order/update/:id", updateOrder)

    .get("/review", getAllReviews)
    .post("/review/add", addReview)
    .put("/review/update/:id", updateReview)
    .delete("/review/delete/:id", deleteReview)

    .get("/contact", getContact)

    .get("/cms", getCms)
    .post("/cms/add", addCms)
    .delete("/cms/delete/:id", DeleteCms)

    .get("/carousel", getCarousel)
    .post("/carousel/add", addCarousel)
    .delete("/carousel/delete/:id", deleteCarousel)


export default router