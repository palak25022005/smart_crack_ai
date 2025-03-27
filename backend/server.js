import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
dotenv.config();

const app= express();
app.use(express.json())
app.use(cors({ origin: "http://localhost:5173", credentials: true })); // Adjust frontend URL
app.use(cookieParser());

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
 app.listen(PORT,()=>{
    connectDB();
    console.log("Listening to port 5000");
 })