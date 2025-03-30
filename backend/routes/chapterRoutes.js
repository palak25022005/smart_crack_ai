import express from "express";
import { getChapters } from "../controllers/chapterController.js";

const router = express.Router();
router.get("/:subject", getChapters);

export default router;
