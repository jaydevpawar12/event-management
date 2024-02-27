import { Router } from "express"
import { addReview, getAllReviews, updateReview } from "../controllers/reviewController.js"
import { protectedRoute } from "../middlewares/privateRoute.js"

const router = Router()

router
    .get("/", getAllReviews)
    .post("/add", protectedRoute, addReview)
    .put("/update/:id", protectedRoute, updateReview)

export default router