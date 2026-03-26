const Document = require("../models/Document");

const uploadDocument = async (req, res) => {
  try {

    const { tripId, name } = req.body;

    const document = new Document({
      tripId,
      name,
      fileUrl: req.file.path
    });

    await document.save();

    res.status(201).json({
      message: "Document uploaded successfully",
      document
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getDocuments = async (req, res) => {
  try {

    const docs = await Document.find({
      tripId: req.params.tripId
    });

    res.json(docs);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  uploadDocument,
  getDocuments
};