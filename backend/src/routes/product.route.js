import e from "express";
import { protectRoute } from "../middleware/middleware.js";
import { getAllProducts, getProductById, getProductsByCategory } from "../controllers/product.controller.js";

const router = e.Router()

router.get("/allproducts",getAllProducts)
router.get("/:id",getProductById)
router.get("/category/:category",getProductsByCategory)

export default router