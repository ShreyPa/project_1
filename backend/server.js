import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.get("/products", (req, res) => {
  res.send("Products route");
});

const PORT = 3000;
connectDB();

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});