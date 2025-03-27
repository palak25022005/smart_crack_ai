import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js";
import syllabusRoutes from "./routes/syllabusRoutes.js";

import { connectDB } from "./config/db.js";
dotenv.config();

const app= express();
app.use(express.json())
app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:5174'], credentials: true })); // Adjust frontend URL
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/syllabus",syllabusRoutes)

const PORT = process.env.PORT || 5001;
 app.listen(PORT,()=>{
    connectDB();
    console.log("Listening to port 5000");
    
 })