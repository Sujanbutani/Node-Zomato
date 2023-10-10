const { order } = require("../models");

/**
 * Create order
 * @param {object} reqBody
 * @returns {Promise<order>}
 */
const createOrder = async (reqBody) => {
  return order.create(reqBody);
};

const getOrderList = async(req, res)=>{
  return order.find({$or : [{is_active : true}]})
  .populate("user")
  .populate("restaurant")
  .populate("food")
};

const getOrderById = async (orderId) => {
  return order.findById(orderId);
};

const updateDetails = async (orderId, updateBody) => {
  return order.findByIdAndUpdate(orderId, { $set: updateBody });
};

const deleteorder = async(OrderId) => {
  return order.findByIdAndDelete(OrderId);
};

module.exports = {
  createOrder,
  getOrderList,
  getOrderById,
  updateDetails,
  deleteorder
};