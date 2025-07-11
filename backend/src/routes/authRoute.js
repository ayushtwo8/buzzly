import { Router } from "express";
import { login, logout, signup, updateProfile, checkAuth } from "../controllers/authController.js";
import { protectRoute } from "../middlewares/authMiddleware.js";

const router = Router();    

router.post('/signup', signup)
router.post('/login', login)
router.post('/logout', logout)

router.put('/update-profile', protectRoute, updateProfile)

router.get('/check', protectRoute, checkAuth);

export default router;