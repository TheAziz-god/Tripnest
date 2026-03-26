const express = require("express");
const router = express.Router();

const { uploadDocument, getDocuments } = require("../controllers/documentController");

const upload = require("../middleware/uploadMiddleware");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, upload.single("file"), uploadDocument);
router.get("/:tripId", authMiddleware, getDocuments);

module.exports = router;