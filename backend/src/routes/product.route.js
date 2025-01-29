import e from "express";
import { protectRoute } from "../middleware/middleware.js";
import { getAllProducts, getProductById } from "../controllers/product.controller.js";

const router = e.Router()

router.get("/allproducts",getAllProducts)
router.get("/:id",getProductById)

export default router