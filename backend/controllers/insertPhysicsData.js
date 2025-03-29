import mongoose from "mongoose";
import dotenv from "dotenv";
import Physics from "../models/physicsModel.js";

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

const physicsChapters = [
  {
    chapter_id: "P1",
    name: "Physics and Measurement",
    completed: false,
    subtopics: [
      { subtopic_id: "P1.1", name: "Physics, Technology, and Society", is_weak: false },
      { subtopic_id: "P1.2", name: "SI Units", is_weak: false },
      { subtopic_id: "P1.3", name: "Fundamental and Derived Units", is_weak: false },
      { subtopic_id: "P1.4", name: "Least Count", is_weak: false },
      { subtopic_id: "P1.5", name: "Accuracy and Precision of Measuring Instruments", is_weak: false },
      { subtopic_id: "P1.6", name: "Errors in Measurement", is_weak: false },
      { subtopic_id: "P1.7", name: "Dimensions of Physical Quantities", is_weak: false },
      { subtopic_id: "P1.8", name: "Dimensional Analysis and Its Applications", is_weak: false }
    ],
    youtube_urls: [
      
    ]
  },
  {
    chapter_id: "P2",
    name: "Kinematics",
    completed: false,
    subtopics: [
      { subtopic_id: "P2.1", name: "Motion in 1D", is_weak: false },
      { subtopic_id: "P2.2", name: "The Frame of Reference", is_weak: false },
      { subtopic_id: "P2.3", name: "Motion in a Straight Line", is_weak: false },
      { subtopic_id: "P2.4", name: "Position-Time Graph", is_weak: false },
      { subtopic_id: "P2.5", name: "Speed and Velocity", is_weak: false },
      { subtopic_id: "P2.6", name: "Uniform and Non-Uniform Motion", is_weak: false },
      { subtopic_id: "P2.7", name: "Average Speed and Instantaneous Velocity", is_weak: false },
      { subtopic_id: "P2.8", name: "Uniformly Accelerated Motion", is_weak: false },
      { subtopic_id: "P2.9", name: "Velocity-Time Graph", is_weak: false },
      { subtopic_id: "P2.10", name: "Relations for Uniformly Accelerated Motion", is_weak: false },
      { subtopic_id: "P2.11", name: "Scalars and Vectors", is_weak: false },
      { subtopic_id: "P2.12", name: "Vector Addition and Subtraction", is_weak: false },
      { subtopic_id: "P2.13", name: "Zero Vector", is_weak: false },
      { subtopic_id: "P2.14", name: "Scalar and Vector Products", is_weak: false },
      { subtopic_id: "P2.15", name: "Unit Vector", is_weak: false },
      { subtopic_id: "P2.16", name: "Resolution of a Vector", is_weak: false },
      { subtopic_id: "P2.17", name: "Relative Velocity", is_weak: false },
      { subtopic_id: "P2.18", name: "Motion in a Plane", is_weak: false },
      { subtopic_id: "P2.19", name: "Projectile Motion", is_weak: false },
      { subtopic_id: "P2.20", name: "Uniform Circular Motion", is_weak: false }
    ],
    youtube_urls: [
      
    ]
  }
  // Add more chapters following the same pattern
];

const insertPhysicsChapters = async () => {
  try {
    await Physics.insertMany(physicsChapters);
    console.log("Physics chapters inserted successfully!");
  } catch (error) {
    console.error("Error inserting physics chapters:", error);
  } finally {
    mongoose.connection.close();
  }
};

const run = async () => {
  await connectDB();
  await insertPhysicsChapters();
};

run();
