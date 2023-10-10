const { delivery } = require("../models");

/**
 * Create delivery
 * @param {object} reqBody
 * @returns {Promise<delivery>}
 */
const createDelivery = async (reqBody) => {
  return delivery.create(reqBody);
};

const getDeliveryList = async(req, res)=>{
  return delivery.find({$or : [{is_active : true}]})
  .populate("country")
  .populate("state")
  .populate("city")
};

const getDeliveryById = async (deliveryId) => {
  return delivery.findById(deliveryId);
};

const updateDetails = async (deliveryId, updateBody) => {
  return delivery.findByIdAndUpdate(deliveryId, { $set: updateBody });
};

const deletedelivery = async(DeliveryId) => {
  return delivery.findByIdAndDelete(DeliveryId);
};

module.exports = {
  createDelivery,
  getDeliveryList,
  getDeliveryById,
  updateDetails,
  deletedelivery
};