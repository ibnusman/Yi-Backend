import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import notesRoutes from "./routes/notes.js";

dotenv.config();

const app = express(); // ✅ Declare `app` before using it

app.use(cors()); // ✅ CORS must come after `app` is declared
app.use(express.json()); // ✅ Allows backend to parse JSON

// Connect to MongoDB
mongoose.connect(process.env.DB_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

// Routes
app.use("/api/notes", notesRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
