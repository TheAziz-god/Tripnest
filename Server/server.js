const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");

const app = express();
const tripRoutes = require("./routes/tripRoutes");
const itineraryRoutes = require("./routes/itineraryRoutes");
const budgetRoutes = require("./routes/budgetRoutes");
const familyRoutes = require("./routes/familyRoutes");
const documentRoutes = require("./routes/documentRoutes");

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
// Routes
app.use("/api/auth", authRoutes);
app.use("/api/trips", tripRoutes);
app.use("/api/itinerary", itineraryRoutes);
app.use("/api/budget", budgetRoutes);
app.use("/api/family", familyRoutes);
app.use("/api/documents", documentRoutes);


// DB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected 🔥"))
  .catch(err => console.log("DB Error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("TripNest API is running 🚀");
});

// Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});