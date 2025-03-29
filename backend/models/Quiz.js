import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  question_number: { type: Number, required: true },
  question_text: { type: String, required: true },
  options: {
    O1: { type: String, default: "" },
    O2: { type: String, default: "" },
    O3: { type: String, default: "" },
    O4: { type: String, default: "" },
  }, // Multiple-choice options
  answered_value: { type: String, enum: ["O1", "O2", "O3", "O4", ""], default: "" },
  correct_option: { type: Number, required: true }, // Index of correct option
  chapter_id: { type: String, required: true, ref: "Physics.chapter_id" }, // Reference to chapter from any subject
  subtopic_id: { type: String, required: true, ref: "Physics.subtopics.subtopic_id" }, // Reference to subtopic
  subject: { type: String, enum: ["Physics", "Chemistry", "Maths"], required: true }, // Subject of the question
  is_answered: { type: Boolean, default: false }, // Default false until student attempts
  
});

const quizSchema = new mongoose.Schema({
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
  quiz_id: { type: String, required: true, unique: true }, // Unique quiz identifier
  num_questions: { type: Number, required: true },
  questions: [questionSchema], // Store all selected questions
  created_at: { type: Date, default: Date.now } // Timestamp
});

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;
