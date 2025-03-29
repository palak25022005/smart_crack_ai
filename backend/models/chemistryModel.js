
import mongoose from "mongoose";

const subtopicSchema = new mongoose.Schema({
  subtopic_id: { type: String, required: true,unique: true },
  name: { type: String, required: true },
  is_weak: { type: Boolean, default: false }
});

const chapterSchema = new mongoose.Schema({
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true }, // Reference to Student model
  chapter_id:{ type: String, required: true,unique: true },
  name: { type: String, required: true },
  completed: { type: Boolean, default: false }, // Track if the chapter is completed
  subtopics: [subtopicSchema], // List of subtopics
  youtube_urls: [{ type: String }]
});

const Chemistry = mongoose.model("Chemistry", chapterSchema);

export default Chemistry;

