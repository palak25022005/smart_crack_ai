/*// mathModel.js
import mongoose from "mongoose";

const subtopicSchema = new mongoose.Schema({
  subtopic_id: String,
  name: String,
});

const chapterSchema = new mongoose.Schema({
  chapter_id: String,
  chapter_name: String,
  subtopics: [subtopicSchema],
});

const MathModel = mongoose.model("Mathematics", chapterSchema);

export default MathModel;
*/

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
});

const Maths = mongoose.model("Maths", chapterSchema);

export default Maths;

