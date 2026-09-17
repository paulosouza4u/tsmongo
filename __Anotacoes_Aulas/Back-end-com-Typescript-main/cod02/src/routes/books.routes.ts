import express from "express";
import bookController from "../controllers/books.controller";
import { requireAuth, UserRole } from "../middlewares/auth.middleware";
import { requireRole } from "../middlewares/role.middleware";
const router = express.Router();

router.post("/books", requireAuth, requireRole(UserRole.ADMIN, UserRole.MODERATOR), bookController.insert);

export default router;