const FamilyGroup = require("../models/FamilyGroup");

// Create family group
const createGroup = async (req, res) => {
  try {

    const { name } = req.body;

    const group = new FamilyGroup({
      name,
      owner: req.user.id,
      members: [req.user.id]
    });

    await group.save();

    res.status(201).json({
      message: "Family group created",
      group
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Get user groups
const getGroups = async (req, res) => {
  try {

    const groups = await FamilyGroup.find({
      members: req.user.id
    }).populate("members", "name email");

    res.json(groups);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Add member to group
const addMember = async (req, res) => {
  try {

    const { groupId, userId } = req.body;

    const group = await FamilyGroup.findById(groupId);

    if (!group) {
      return res.status(404).json({ message: "Group not found" });
    }

    group.members.push(userId);

    await group.save();

    res.json({
      message: "Member added",
      group
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createGroup,
  getGroups,
  addMember
};