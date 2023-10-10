const { Restaurant } = require("../models");

// create restaurant
const createRestaurant = async (reqBody) => {
  return Restaurant.create(reqBody);
};

//  Get restaurant list
const getRestaurantList = async (req, res) => {
  return Restaurant.find().count()
  .populate("Restaurant_type")
};

const getRestaurantById = async (restaurantId) => {
  return Restaurant.findById(restaurantId);
};

const updateDetails = async (restaurantId, updateBody) => {
  return Restaurant.findByIdAndUpdate(restaurantId, { $set: updateBody });
};

// delete restaurant
const deleteRestaurant = async (restaurantId) => {
  return Restaurant.findByIdAndDelete(restaurantId);
};


module.exports = {
  createRestaurant,
  getRestaurantList,
  getRestaurantById,
  updateDetails,
  deleteRestaurant,
};