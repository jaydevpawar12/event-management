import express from "express"
import cors from "cors"
import notfier from "node-notifier"
import mongoose from "mongoose"
import morgan from "morgan"
import rateLimiter from "express-rate-limit"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

import path from "path"
import fs from "fs"
const __dirname = path.resolve()

dotenv.config({ path: "./.env" })

import packageRoutes from "./routes/packageRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import couponRoutes from "./routes/couponRoutes.js"
import reviewRoutes from "./routes/reviewRoutes.js"
import contactRoutes from "./routes/contactRoutes.js"
import adminRoute from "./routes/adminRoute.js"
import authRoute from "./routes/authRoute.js"
import cmsRoute from "./routes/cmsRoute.js"
// __dirname = path.resolve()
import { adminProtectedRoute, protectedRoute } from "./middlewares/privateRoute.js"

mongoose.connect(process.env.MONGO_URL)
const app = express()
app.use(cookieParser())
app.use(express.json())

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
app.use(morgan('combined', { stream: accessLogStream }))

// app.use(rateLimiter({
//     windowMs: 15 * 60 * 1000,  // Limit 100 Request Per 15 Minute
//     max: 100000,
//     standardHeaders: "draft-7",
//     legacyHeaders: false
// }))

// app.use(express.static(path.join(__dirname, "dist", "index.html")))

app.use(express.static("uploads"))
app.use(cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,PATCH,DELETE", // Prevent XSS ATTACK
    credentials: true
}))

app.use("/api/packages", packageRoutes)
app.use("/api/user", userRoutes)
app.use("/api/orders", protectedRoute, orderRoutes)
app.use("/api/reviews", reviewRoutes)
app.use("/api/coupons", couponRoutes)
app.use("/api/contact", contactRoutes)
app.use("/api/admin", adminProtectedRoute, adminRoute)
app.use("/api/auth", authRoute)
app.use("/api/cms", cmsRoute)

app.use("*", (req, res) => {  // this line shoul be after Routes
    res.sendFile(path.join(__dirname, "dist", "index.html"))
    // notfier.notify({
    //     title: "404 not found ",
    //     message: `${req.path} ${req.method}`
    // })
    // res.status(404).json({
    //     error: `Resource not found @ ${req.path} ${req.method}  `
    // })
})

app.use((err, req, res, next) => {    // this line should be at the end
    // console.log(err)
    notfier.notify({
        title: err.message,
        message: `Resource not found @ ${req.path} ${req.method}`
    })
    res.status(500).json({
        error: err.message || 'Something went wrong'
    })
})

mongoose.connection.once("open", () => {
    console.log(`server running at http://localhost:${process.env.PORT}`)
    app.listen(process.env.PORT || 5000, console.log("MONGO CONNECTED"))

})