const { restaurant_type } = require("../models");

/**
 * Create restaurant_type
 * @param {object} reqBody
 * @returns {Promise<restaurant_type>}
 */
const createRestaurant_type = async (reqBody) => {
  return restaurant_type.create(reqBody);
};

const getRestaurant_typeList = async(req, res)=>{
  return restaurant_type.find()
};

const getRestaurant_typeById = async (restaurant_typeId) => {
  return restaurant_type.findById(restaurant_typeId);
};

const updateDetails = async (restaurant_typeId, updateBody) => {
  return restaurant_type.findByIdAndUpdate(restaurant_typeId, { $set: updateBody });
};

const deleterestaurant_type = async(Restaurant_typeId) => {
  return restaurant_type.findByIdAndDelete(Restaurant_typeId);
};

module.exports = {
  createRestaurant_type,
  getRestaurant_typeList,
  getRestaurant_typeById,
  updateDetails,
  deleterestaurant_type
};