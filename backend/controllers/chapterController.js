import Physics from "../models/physicsModel.js";
import Chemistry from "../models/chemistryModel.js";
import Maths from "../models/mathModel.js";

export const getChapters = async (req, res) => {
  const { subject } = req.params;
  try {
    let chapters;
    if (subject === "Physics") chapters = await Physics.find({});
    if (subject === "Chemistry") chapters = await Chemistry.find({});
    if (subject === "Maths") chapters = await Maths.find({});
    res.json(chapters);
  } catch (error) {
    res.status(500).json({ message: "Error fetching chapters" });
  }
};
