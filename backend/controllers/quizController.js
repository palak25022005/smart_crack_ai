import Quiz from "../models/Quiz.js";
import axios from "axios";

export const createQuiz = async (req, res) => {
  const { student_id, selectedLessons, difficulty, num_questions } = req.body;

  try {
    // Call Python API (MCQ.py) to generate questions
    const response = await axios.post("http://localhost:5001/generateMCQ", {
      selectedLessons,
      difficulty,
      num_questions
    });

    // Save the generated quiz
    const quiz = new Quiz({
      student_id,
      quiz_id: `QUIZ-${Date.now()}`,
      num_questions,
      difficulty_level: difficulty,
      questions: response.data.questions
    });

    await quiz.save();
    res.json({ message: "Quiz Created!", quiz_id: quiz.quiz_id });
  } catch (error) {
    res.status(500).json({ message: "Quiz generation failed" });
  }
};
