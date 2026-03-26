// const Trip = require("../models/Trip");


// // CREATE TRIP (protected)
// const createTrip = async (req, res) => {
//   try {

//     const { title, destination, startDate, endDate } = req.body;

//     const trip = new Trip({
//       title,
//       destination,
//       startDate,
//       endDate,
//       // userId: "demo-user"
//     });

//     await trip.save();

//     res.status(201).json({
//       message: "Trip created successfully",
//       trip
//     });

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };



// // GET ALL TRIPS (public)
// const getTrips = async (req, res) => {
//   try {

//     const trips = await Trip.find();

//     res.json(trips);

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };



// // GET SINGLE TRIP (public)
// const getTripById = async (req, res) => {
//   try {

//     const trip = await Trip.findById(req.params.id);

//     if (!trip) {
//       return res.status(404).json({ message: "Trip not found" });
//     }

//     res.json(trip);

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };



// // UPDATE TRIP (protected)
// const updateTrip = async (req, res) => {
//   try {

//     const trip = await Trip.findOneAndUpdate(
//       { _id: req.params.id, userId: req.user.id },
//       req.body,
//       { new: true }
//     );

//     if (!trip) {
//       return res.status(404).json({ message: "Trip not found" });
//     }

//     res.json({
//       message: "Trip updated successfully",
//       trip
//     });

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };



// // DELETE TRIP (protected)
// const deleteTrip = async (req, res) => {
//   try {

//     const trip = await Trip.findOneAndDelete({
//       _id: req.params.id,
//       userId: req.user.id
//     });

//     if (!trip) {
//       return res.status(404).json({ message: "Trip not found" });
//     }

//     res.json({
//       message: "Trip deleted successfully"
//     });

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// module.exports = {
//   createTrip,
//   getTrips,
//   getTripById,
//   updateTrip,
//   deleteTrip
// };
const Trip = require("../models/Trip");


// CREATE TRIP
exports.createTrip = async (req, res) => {

  try {

    const trip = new Trip(req.body);

    const savedTrip = await trip.save();

    res.status(201).json(savedTrip);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};



// GET ALL TRIPS
exports.getTrips = async (req, res) => {

  try {

    const trips = await Trip.find();

    res.json(trips);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};



// GET SINGLE TRIP
exports.getTripById = async (req, res) => {

  try {

    const trip = await Trip.findById(req.params.id);

    if (!trip) {
      return res.status(404).json({ message: "Trip not found" });
    }

    res.json(trip);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};



// UPDATE TRIP
exports.updateTrip = async (req, res) => {

  try {

    const updatedTrip = await Trip.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedTrip);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};



// DELETE TRIP
exports.deleteTrip = async (req, res) => {

  try {

    await Trip.findByIdAndDelete(req.params.id);

    res.json({ message: "Trip deleted successfully" });

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};