const Itinerary = require("../models/Itinerary");

const addItinerary = async (req, res) => {
  try {

    const { tripId, day, activity, time } = req.body;

    const itinerary = new Itinerary({
      tripId,
      day,
      activity,
      time
    });

    await itinerary.save();

    res.status(201).json({
      message: "Activity added to itinerary",
      itinerary
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getItinerary = async (req, res) => {
  try {

    const itinerary = await Itinerary.find({ tripId: req.params.tripId });

    res.json(itinerary);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addItinerary,
  getItinerary
};