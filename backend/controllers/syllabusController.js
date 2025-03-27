import Student from "../models/students_db.js";
import JEEExam from "../models/jee_exam.js"
import NEETExam from "../models/neet_exam.js"

// Assign syllabus based on student exam type
async function assignExamSyllabus(studentId) {
  try {
    const student = await Student.findById(studentId);
    if (!student) return console.log("Student not found.");

    if (student.exam === "JEE") {
      const newJEEData = new JEEExam({
        studentId,
        standards: [
          {
            level: "11th",
            subjects: [
              {
                name: "Physics",
                chapters: [{ name: "Kinematics", completed: false, subtopics: [{ name: "Motion in 1D" }] }],
              },
              { name: "Mathematics", chapters: [{ name: "Sets & Relations", completed: false }] },
            ],
          },
          {
            level: "12th",
            subjects: [
              {
                name: "Physics",
                chapters: [{ name: "Kinematics", completed: false, subtopics: [{ name: "Motion in 1D" }] }],
              },
              { name: "Mathematics", chapters: [{ name: "Sets & Relations", completed: false }] },
            ],
          },
        ],
      });

      await newJEEData.save();
      console.log("JEE syllabus assigned.");
    } else if (student.exam === "NEET") {
      const newNEETData = new NEETExam({
        studentId,
        standards: [
          {
            level: "11th",
            subjects: [
              { name: "Biology", chapters: [{ name: "Cell Structure", completed: false }] },
            ],
          },
          {
            level: "12th",
            subjects: [
              { name: "Biology", chapters: [{ name: "Cell Structure", completed: false }] },
            ],
          },
        ],
      });

      await newNEETData.save();
      console.log("NEET syllabus assigned.");
    }
  } catch (error) {
    console.error("Error assigning syllabus:", error);
  }
}

// Fetch student syllabus
async function getStudentSyllabus(req, res) {
  try {
    const { studentId } = req.params;
    const student = await Student.findById(studentId);
    if (!student) return res.status(404).json({ message: "Student not found" });

    const ExamModel = student.exam === "JEE" ? JEEExam : NEETExam;
    const syllabus = await ExamModel.findOne({ studentId });

    res.json(syllabus);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export default { assignExamSyllabus, getStudentSyllabus };
