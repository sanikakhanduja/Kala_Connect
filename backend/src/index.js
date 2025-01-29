import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js"
import authRouter from "./routes/auth.route.js"
dotenv.config()
const app = express()
app.use(cors())
app.use("/api/auth",authRouter)


app.listen('5001',()=>{
    console.log("server up")
    connectDB()
})