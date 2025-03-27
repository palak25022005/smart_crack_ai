import mongoose from "mongoose";

const subtopicSchema = new mongoose.Schema({ name: String });

const chapterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  completed: { type: Boolean, default: false },
  subtopics: [subtopicSchema],
});

const subjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  chapters: [chapterSchema],
});

const jeeExamSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
  standards: [
    {
      level: { type: String, enum: ["11th", "12th"], required: true },
      subjects: [subjectSchema],
    },
  ],
});

const JEEExam = mongoose.model("JEEExam", jeeExamSchema);
export default JEEExam
