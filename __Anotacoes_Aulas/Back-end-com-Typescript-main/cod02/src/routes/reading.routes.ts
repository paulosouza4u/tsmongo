import express from "express";
import { markAsReading } from "../controllers/reading.controller";
const router = express.Router();

router.post("/readings", markAsReading);

export default router;