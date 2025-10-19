import express from "express";
import cors from "cors";
import dotenv from "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());
connectDB();
connectCloudinary();

// api endpoints

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("E-Commerce Backend is running");
});
