const express = require("express");
const router = express.Router();

const {
  createGroup,
  getGroups,
  addMember
} = require("../controllers/familyController");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, createGroup);
router.get("/", authMiddleware, getGroups);
router.post("/add-member", authMiddleware, addMember);

module.exports = router;