import multer from "multer"
import path from "path"
import { v4 as uuid } from "uuid"

const logoStorage = multer.diskStorage({
    filename: (req, file, next) => {
        const ext = path.extname(file.originalname)
        const fn = uuid() + ext
        next(null, fn)
    },
    destination: (req, file, next) => {
        next(null, 'uploads')
    }
})
const logoUpload = multer({ storage: logoStorage }).single("logo")
export default logoUpload