const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema(
{
  title: {
    type: String,
    required: true
  },

  destination: {
    type: String,
    required: true
  },

  description: {
    type: String
  },

  image: {
    type: String
  },

  startDate: {
    type: Date
  },

  endDate: {
    type: Date
  },

  price: {
    type: Number
  },

  rating: {
    type: Number,
    default: 4.5
  }

},
{ timestamps: true }
);

module.exports = mongoose.model("Trip", tripSchema);