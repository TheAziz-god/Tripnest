const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
  tripId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trip",
    required: true
  },
  name: {
    type: String,
    required: true
  },
  fileUrl: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Document", documentSchema);