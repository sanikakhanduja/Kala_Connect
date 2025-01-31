import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import authRouter from "./routes/auth.route.js";
import productRouter from "./routes/product.route.js";
import sellerRouter from "./routes/seller.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

dotenv.config();

const PORT = process.env.PORT;
const __dirname = path.resolve();
const app = express();

// Middleware to parse JSON and cookies
app.use(express.json());
app.use(cookieParser());

// CORS configuration
app.use(cors({
  origin: "http://127.0.0.1:5173",  // Frontend URL
  credentials: true
}));

// Disable caching globally
app.use((req, res, next) => {
  // Add Cache-Control headers to disable caching
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache'); // Older HTTP 1.0 caches
  res.setHeader('Expires', '0'); // Proxies will not cache the response
  next();
});

// Static file serving in production
if (process.env.NODE_ENV === "production") {
  // Serve static files (frontend build folder)
  app.use(express.static(path.join(__dirname, "../frontend/dist"), {
    etag: false, // Disable ETag header (to prevent caching)
    maxAge: '0'  // Disable browser caching
  }));

  // Serve index.html for all routes in production
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

// Routes
app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
app.use("/api/seller", sellerRouter);

// Ping route for health check
app.get('/ping', (req, res) => {
  res.send('Pong');
});

// Start server
app.listen(PORT, () => {
  console.log("Server up on port", PORT);
  connectDB(); // Connect to DB
});
