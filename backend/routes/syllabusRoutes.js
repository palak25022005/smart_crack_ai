import express from "express"
import syllabusController from "../controllers/syllabusController.js";
const router = express.Router();

router.get("/syllabus/:studentId", syllabusController.getStudentSyllabus);

export default router
