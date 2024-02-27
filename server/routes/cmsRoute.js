import { Router } from "express";
import { getCarousel, getCms } from "../controllers/cmsController.js";


const router = Router()

router
    .get("/cms", getCms)
    .get("/carousel", getCarousel)

export default router