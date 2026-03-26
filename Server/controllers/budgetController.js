const Budget = require("../models/Budget");

const addExpense = async (req, res) => {
  try {

    const { tripId, category, amount } = req.body;

    const expense = new Budget({
      tripId,
      category,
      amount
    });

    await expense.save();

    res.status(201).json({
      message: "Expense added",
      expense
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getExpenses = async (req, res) => {
  try {

    const expenses = await Budget.find({ tripId: req.params.tripId });

    res.json(expenses);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addExpense,
  getExpenses
};