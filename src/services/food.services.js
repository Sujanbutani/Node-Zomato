const { food } = require("../models");

// create food
const createFood = async (reqBody) => {
  return food.create(reqBody);
};

//  Get food list
const getFoodList = async (req, res) => {
  return food.find()
  .populate("Restaurant");
};

const getFoodById = async (foodId) => {
  return food.findById(foodId);
};

const updateDetails = async (foodId, updateBody) => {
  return food.findByIdAndUpdate(foodId, { $set: updateBody });
};

// delete food
const deleteFood = async (foodId) => {
  return food.findByIdAndDelete(foodId);
};


module.exports = {
  createFood,
  getFoodList,
  getFoodById,
  updateDetails,
  deleteFood,
};