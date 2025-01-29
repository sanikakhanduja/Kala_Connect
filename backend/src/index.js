import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js"
import authRouter from "./routes/auth.route.js"
import productRouter from "./routes/product.route.js"
import sellerRouter from "./routes/seller.route.js"
import cookieParser from "cookie-parser"
import cors from "cors"

dotenv.config()
const app = express()
app.use(express.json());
app.use(cors())
app.use(cookieParser())
app.use("/api/auth",authRouter)
app.use("/api/products",productRouter)
app.use("/api/seller",sellerRouter)


app.listen('5001',()=>{
    console.log("server up")
    connectDB()
})