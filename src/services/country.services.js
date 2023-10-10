const { country } = require("../models");

/**
 * Create country
 * @param {object} reqBody
 * @returns {Promise<country>}
 */
const createCountry = async (reqBody) => {
  return country.create(reqBody);
};

const getCountryList = async(req, res)=>{
  return country.find({$or : [{is_active : true}]});
};

const getCountryById = async (countryId) => {
  return country.findById(countryId);
};

const updateDetails = async (countryId, updateBody) => {
  return country.findByIdAndUpdate(countryId, { $set: updateBody });
};

const deletecountry = async(CountryId) => {
  return country.findByIdAndDelete(CountryId);
};

module.exports = {
  createCountry,
  getCountryList,
  getCountryById,
  updateDetails,
  deletecountry
};