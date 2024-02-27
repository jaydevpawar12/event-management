import { Router } from "express"
import { getAllPackages, getPackageDetails } from "./../controllers/packageController.js"

const router = Router()

router
    .get("/", getAllPackages)
    .get("/:packageId", getPackageDetails)

export default router