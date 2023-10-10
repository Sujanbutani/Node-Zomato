const { city } = require("../models");

/**
 * Create city
 * @param {object} reqBody
 * @returns {Promise<city>}
 */
const createCity = async (reqBody) => {
  return city.create(reqBody);
};

const getCityList = async(req, res)=>{
  return city.find({$or : [{is_active : true}]})
  .populate("country")
  .populate("state")
};

const getCityById = async (cityId) => {
  return city.findById(cityId);
};

const updateDetails = async (cityId, updateBody) => {
  return city.findByIdAndUpdate(cityId, { $set: updateBody });
};

const deletecity = async(CityId) => {
  return city.findByIdAndDelete(CityId);
};

module.exports = {
  createCity,
  getCityList,
  getCityById,
  updateDetails,
  deletecity
};