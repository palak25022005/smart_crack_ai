import mongoose from "mongoose";
import dotenv from "dotenv";
import Chemistry from "../models/chemistryModel.js";

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

const chemistryChapters = [
  {
    chapter_id: "C1",
    name: "Some Basic Concepts of Chemistry",
    completed: false,
    subtopics: [
      { subtopic_id: "C1.1", name: "Matter and Its Nature", is_weak: false },
      { subtopic_id: "C1.2", name: "Daltons Atomic Theory", is_weak: false },
      { subtopic_id: "C1.3", name: "Concept of Atom, Molecule, Element, and Compound", is_weak: false },
      { subtopic_id: "C1.4", name: "Physical Quantities and Their Measurements in Chemistry", is_weak: false },
      { subtopic_id: "C1.5", name: "Precision and Accuracy", is_weak: false },
      { subtopic_id: "C1.6", name: "Significant Figures", is_weak: false },
      { subtopic_id: "C1.7", name: "SI Units", is_weak: false },
      { subtopic_id: "C1.8", name: "Dimensional Analysis", is_weak: false },
      { subtopic_id: "C1.9", name: "Laws of Chemical Combination", is_weak: false },
      { subtopic_id: "C1.10", name: "Atomic and Molecular Masses", is_weak: false },
      { subtopic_id: "C1.11", name: "Mole Concept", is_weak: false },
      { subtopic_id: "C1.12", name: "Molar Mass", is_weak: false },
      { subtopic_id: "C1.13", name: "Percentage Composition", is_weak: false },
      { subtopic_id: "C1.14", name: "Empirical and Molecular Formulae", is_weak: false },
      { subtopic_id: "C1.15", name: "Chemical Equations and Stoichiometry", is_weak: false }
    ],
    youtube_urls: [
      
    ]
  },
  {
    chapter_id: "C2",
    name: "States of Matter",
    completed: false,
    subtopics: [
      { subtopic_id: "C2.1", name: "Classification of Matter into Solid, Liquid, and Gaseous States", is_weak: false },
      { subtopic_id: "C2.2", name: "Gaseous State: Measurable Properties of Gases", is_weak: false },
      { subtopic_id: "C2.3", name: "Gas Laws: Boyle’s Law, Charles’s Law, Graham’s Law of Diffusion, Avogadro’s Law, Dalton’s Law of Partial Pressure", is_weak: false },
      { subtopic_id: "C2.4", name: "Concept of Absolute Scale of Temperature", is_weak: false },
      { subtopic_id: "C2.5", name: "Ideal Gas Equation", is_weak: false },
      { subtopic_id: "C2.6", name: "Kinetic Theory of Gases (Only Postulates)", is_weak: false },
      { subtopic_id: "C2.7", name: "Concept of Average, Root Mean Square, and Most Probable Velocities", is_weak: false },
      { subtopic_id: "C2.8", name: "Real Gases and Deviation from Ideal Behaviour", is_weak: false },
      { subtopic_id: "C2.9", name: "Compressibility Factor", is_weak: false },
      { subtopic_id: "C2.10", name: "Van der Waals Equation", is_weak: false },
      { subtopic_id: "C2.11", name: "Liquefaction of Gases", is_weak: false },
      { subtopic_id: "C2.12", name: "Critical Constants", is_weak: false },
      { subtopic_id: "C2.13", name: "Liquid State: Properties of Liquids – Vapour Pressure, Viscosity, and Surface Tension", is_weak: false },
      { subtopic_id: "C2.14", name: "Effect of Temperature on Liquid Properties (Qualitative Treatment)", is_weak: false }
    ],
    youtube_urls: [
      
    ]
  }
];

const insertChemistryChapters = async () => {
  try {
    await Chemistry.insertMany(chemistryChapters);
    console.log("Chemistry chapters inserted successfully!");
  } catch (error) {
    console.error("Error inserting chemistry chapters:", error);
  } finally {
    mongoose.connection.close();
  }
};

const run = async () => {
  await connectDB();
  await insertChemistryChapters();
};

run();
