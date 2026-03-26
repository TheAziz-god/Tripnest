const express = require("express");
const router = express.Router();

const { addItinerary, getItinerary } = require("../controllers/itineraryController");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, addItinerary);
router.get("/:tripId", authMiddleware, getItinerary);

module.exports = router;