import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js";
import { connectDB } from "./config/db.js";
dotenv.config();

const app= express();
app.use(express.json())
app.use(cors({ origin: ["http://localhost:5173", "http://localhost:5174"] , credentials: true })); 
app.use(cookieParser());

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
   connectDB().then(() => {
      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
    })