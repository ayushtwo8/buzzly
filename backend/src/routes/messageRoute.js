import { Router } from "express";
import { protectRoute } from "../middlewares/authMiddleware.js";
import { getUsersForSidebar } from "../controllers/messageController.js";

const router = Router();

router.get('/user', protectRoute, getUsersForSidebar);
router.get()

export default router;