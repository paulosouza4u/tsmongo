import express from "express";
import { getUserProfile, saveUser } from "../controllers/users.controller";
import { requireAuth, UserRole } from "../middlewares/auth.middleware";
import { requireRole } from "../middlewares/role.middleware";
const router = express.Router();

router.get("/users/:id", requireAuth, getUserProfile);
router.post("/users", requireAuth, requireRole(UserRole.ADMIN), saveUser);

export default router;