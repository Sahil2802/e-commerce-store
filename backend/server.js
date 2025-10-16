import express from "express";
import cors from "cors";
import dotenv from "dotenv/config";

const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

// api endpoints

app.listen(3000, () => {
  console.log(`server is running on http://localhost:${port}`);
});
