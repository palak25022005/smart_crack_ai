import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/students_db.js";

const router = express.Router();

// REGISTER route
router.post("/register", async (req, res) => {
  try {
    const { username, email, password, name, studentClass, exam} = req.body;

    //check if the user already exist
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    // Hash the password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create a new user with first visit option set to true
    const newUser = new User({ username, email, password, name, studentClass, exam, firstVisit:true});
    await newUser.save();
    
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    //check if the user exist
    const user = await User.findOne({ email });
     if (!user) return res.status(400).json({ message: "User not found" });

     //compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    //generate a jwt token for authentication
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    // Set a cookie with the JWT token (httpOnly to prevent XSS attacks)
    res.cookie("token", token, { httpOnly: true, secure: true, sameSite: "strict" });

    // Update firstVisit to false since the user has logged in
    await User.findByIdAndUpdate(user._id, { firstVisit: false });

    res.status(200).json({ message: "Login successful", token, firstVisit: user.firstVisit });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// CHECK LOGIN STATUS route
router.get("/me", async (req, res) => {
  try {
    // Retrieve the token from cookies
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "Not logged in" });

    // Verify the JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");

    res.json({ user, firstVisit: user.firstVisit });
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
});

// LOGOUT
router.post("/logout", (req, res) => {
  // Clear the authentication token cookie
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
});

export default router;
