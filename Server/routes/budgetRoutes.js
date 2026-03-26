const express = require("express");
const router = express.Router();

const { addExpense, getExpenses } = require("../controllers/budgetController");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, addExpense);
router.get("/:tripId", authMiddleware, getExpenses);

module.exports = router;