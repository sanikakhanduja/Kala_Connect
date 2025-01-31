import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js"
import authRouter from "./routes/auth.route.js"
import productRouter from "./routes/product.route.js"
import sellerRouter from "./routes/seller.route.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import path from "path"

dotenv.config()

const PORT = process.env.PORT
const __dirname = path.resolve()
const app = express()
app.use(express.json());
app.use(cors({
    origin:"http://127.0.0.1:5173",
    credentials:true
  }))
app.use(cookieParser())
if(process.env.NODE_ENV==="production"){
  app.use(express.static(path.join(__dirname,"../frontend/dist")))

  app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
  })
}

app.use("/api/auth",authRouter)
app.use("/api/products",productRouter)
app.use("/api/seller",sellerRouter)

app.get('/ping', (req, res) => {
  res.send('Pong');
});
app.listen(PORT,()=>{
    console.log("server up")
    connectDB()
})