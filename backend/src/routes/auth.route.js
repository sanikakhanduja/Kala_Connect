import e from "express";
import { protectRoute } from "../middleware/middleware.js";
import { signup,login,logout,checkAuth } from "../controllers/auth.controller.js";
const router = e.Router()

router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)

router.get("/check",protectRoute,checkAuth)

export default router