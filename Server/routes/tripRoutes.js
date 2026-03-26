const express = require("express");
const router = express.Router();

const {
  createTrip,
  getTrips,
  getTripById,
  updateTrip,
  deleteTrip
} = require("../controllers/tripController");

const authMiddleware = require("../middleware/authMiddleware");


// PUBLIC ROUTES (anyone can view trips)
router.get("/", getTrips);
router.get("/:id", getTripById);


// PROTECTED ROUTES (admin only)
router.post("/", authMiddleware, createTrip);
router.put("/:id", authMiddleware, updateTrip);
router.delete("/:id", authMiddleware, deleteTrip);

module.exports = router;