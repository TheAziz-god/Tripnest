const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema({
  tripId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trip",
    required: true
  },
  category: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Budget", budgetSchema);