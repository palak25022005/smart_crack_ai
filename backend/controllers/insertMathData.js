/*import mongoose from "mongoose";
import dotenv from "dotenv";
import Maths from "../models/mathModel.js";

dotenv.config();

const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  console.error("Error: MONGO_URI is not defined in .env file!");
  process.exit(1);
}

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1);
  }
};

const mathChapters = [
  {
    chapter_id: "M1",
    name: "Sets & Relations",
    completed: false,
    subtopics: [
      { subtopic_id: "M1.1", name: "Sets and Their Representation", is_weak: false },
      { subtopic_id: "M1.2", name: "Union, Intersection, and Complement of Sets and Their Algebraic Properties", is_weak: false },
      { subtopic_id: "M1.3", name: "Power Set", is_weak: false },
      { subtopic_id: "M1.4", name: "Relation", is_weak: false },
      { subtopic_id: "M1.5", name: "Types of Relations", is_weak: false },
      { subtopic_id: "M1.6", name: "Equivalence Relations", is_weak: false },
      { subtopic_id: "M1.7", name: "Functions", is_weak: false },
      { subtopic_id: "M1.8", name: "One-One, Into, and Onto Functions", is_weak: false },
      { subtopic_id: "M1.9", name: "Composition of Functions", is_weak: false }
    ],
    youtube_urls: [
      
    ]
  },
  {
    chapter_id: "M2",
    name: "Complex Numbers and Quadratic Equations",
    completed: false,
    subtopics: [
      { subtopic_id: "M2.1", name: "Complex Numbers as Ordered Pairs of Reals", is_weak: false },
      { subtopic_id: "M2.2", name: "Representation of Complex Numbers in the Form (a + ib) and Argand Diagram", is_weak: false },
      { subtopic_id: "M2.3", name: "Algebra of Complex Numbers", is_weak: false },
      { subtopic_id: "M2.4", name: "Modulus and Argument (or Amplitude) of a Complex Number", is_weak: false },
      { subtopic_id: "M2.5", name: "Square Root of a Complex Number", is_weak: false },
      { subtopic_id: "M2.6", name: "Triangle Inequality", is_weak: false },
      { subtopic_id: "M2.7", name: "Quadratic Equations in Real and Complex Number System and Their Solutions", is_weak: false },
      { subtopic_id: "M2.8", name: "Relation Between Roots and Coefficients", is_weak: false },
      { subtopic_id: "M2.9", name: "Nature of Roots", is_weak: false },
      { subtopic_id: "M2.10", name: "Formation of Quadratic Equations with Given Roots", is_weak: false }
    ],
    youtube_urls: [
      
    ]
  }
];

const insertMathChapters = async () => {
  try {
    await Maths.insertMany(mathChapters);
    console.log("Math chapters inserted successfully!");
  } catch (error) {
    console.error("Error inserting math chapters:", error);
  } finally {
    mongoose.connection.close();
  }
};

const run = async () => {
  await connectDB();
  await insertMathChapters();
};

run();

*/
import mongoose from "mongoose";
import dotenv from "dotenv";
import Maths from "../models/mathModel.js";
import Student from "../models/students_db.js"; // Import Student model

dotenv.config();

const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  console.error("Error: MONGO_URI is not defined in .env file!");
  process.exit(1);
}

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1);
  }
};

const insertMathsChapters = async () => {
  try {
    // ✅ Fetch a student from the database
    const student = await Student.findOne();
    if (!student) {
      console.error("No student found! Please add a student first.");
      return;
    }

    // ✅ Chemistry chapters with dynamically assigned student_id
    const mathsChapters = [
      {  student_id: student._id,  
        chapter_id: "M1",
        name: "Sets & Relations",
        completed: false,
        
        subtopics: [
          { subtopic_id: "M1.1", name: "Sets and Their Representation", is_weak: false },
          { subtopic_id: "M1.2", name: "Union, Intersection, and Complement of Sets and Their Algebraic Properties", is_weak: false },
          { subtopic_id: "M1.3", name: "Power Set", is_weak: false },
          { subtopic_id: "M1.4", name: "Relation", is_weak: false },
          { subtopic_id: "M1.5", name: "Types of Relations", is_weak: false },
          { subtopic_id: "M1.6", name: "Equivalence Relations", is_weak: false },
          { subtopic_id: "M1.7", name: "Functions", is_weak: false },
          { subtopic_id: "M1.8", name: "One-One, Into, and Onto Functions", is_weak: false },
          { subtopic_id: "M1.9", name: "Composition of Functions", is_weak: false }
        ],
        youtube_urls: [
          
        ]
      },
      { student_id: student._id,  
        chapter_id: "M2",
        name: "Complex Numbers and Quadratic Equations",
        completed: false,
      
        subtopics: [
          { subtopic_id: "M2.1", name: "Complex Numbers as Ordered Pairs of Reals", is_weak: false },
          { subtopic_id: "M2.2", name: "Representation of Complex Numbers in the Form (a + ib) and Argand Diagram", is_weak: false },
          { subtopic_id: "M2.3", name: "Algebra of Complex Numbers", is_weak: false },
          { subtopic_id: "M2.4", name: "Modulus and Argument (or Amplitude) of a Complex Number", is_weak: false },
          { subtopic_id: "M2.5", name: "Square Root of a Complex Number", is_weak: false },
          { subtopic_id: "M2.6", name: "Triangle Inequality", is_weak: false },
          { subtopic_id: "M2.7", name: "Quadratic Equations in Real and Complex Number System and Their Solutions", is_weak: false },
          { subtopic_id: "M2.8", name: "Relation Between Roots and Coefficients", is_weak: false },
          { subtopic_id: "M2.9", name: "Nature of Roots", is_weak: false },
          { subtopic_id: "M2.10", name: "Formation of Quadratic Equations with Given Roots", is_weak: false }
        ],
        youtube_urls: [
          
        ]
      }
    ];

    await Maths.insertMany(mathsChapters);
    console.log("Maths chapters inserted successfully!");
  } catch (error) {
    console.error("Error inserting chemistry chapters:", error);
  } finally {
    mongoose.connection.close();
  }
};

const run = async () => {
  await connectDB();
  await insertMathsChapters();
};

run();
