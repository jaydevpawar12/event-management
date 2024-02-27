import { Router } from "express"
import { addContact } from "../controllers/contactController.js"

const router = Router()

router.post("/enquery", addContact)

export default router