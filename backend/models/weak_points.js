import mongoose from "mongoose";

const weakPointSchema = new mongoose.Schema({
  student_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
    unique: true
  },
  
  subject: {
    P: {
      chapters: [
        {
          chapter_id: { type: String, required: true, ref: "Physics.chapter_id" }, // Correctly referencing Physics.chapter_id
          weak_topics: [{ type: String, required: true, ref: "Physics.subtopics.subtopic_id" }] // Correctly referencing subtopic_id
        }
      ]
    },
    C: {
      chapters: [
        {
          chapter_id: { type: String, required: true, ref: "Chemistry.chapter_id" }, // Correct reference to Chemistry.chapter_id
          weak_topics: [{ type: String, required: true, ref: "Chemistry.subtopics.subtopic_id" }] // Correct reference to Chemistry.subtopic_id
        }
      ]
    },
    M: {
      chapters: [
        {
          chapter_id: { type: String, required: true, ref: "Maths.chapter_id" }, // Correct reference to Maths.chapter_id
          weak_topics: [{ type: String, required: true, ref: "Maths.subtopics.subtopic_id" }] // Correct reference to Maths.subtopic_id
        }
      ]
    }
  }
});

const WeakPoint = mongoose.model("WeakPoint", weakPointSchema);

export default WeakPoint;
