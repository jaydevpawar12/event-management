import { Router } from "express"
import { loginUser, logoutUser, registerUser } from "../controllers/authController.js"

const router = Router()

router
    .post("/register", registerUser)
    .post("/login", loginUser)
    .post("/logout", logoutUser)



export default router