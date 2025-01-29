import e from "express";
import { protectRoute } from "../middleware/middleware.js";
import { addProduct, getAllSellerProducts } from "../controllers/seller.controller.js";

const router = e.Router()

router.get("/allproducts",protectRoute,getAllSellerProducts)
router.post("/addproduct",protectRoute,addProduct)

export default router