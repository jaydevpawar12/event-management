import { Router } from "express";
import { loginCustomer, registerCustomer } from "../controllers/authController.js";

const router = Router()
router
    .post("/customer/register", registerCustomer)
    .post("/customer/login", loginCustomer)

export default router