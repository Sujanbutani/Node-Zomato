const { cart } = require("../models");

/**
 * Create cart
 * @param {object} reqBody
 * @returns {Promise<cart>}
 */
const createCart = async (reqBody) => {
  return cart.create(reqBody);
};

const getCartList = async(req, res)=>{
  return cart.find({$or : [{is_active : true}]})
  .populate("user")
  .populate("food")
};

const getCartById = async (cartId) => {
  return cart.findById(cartId);
};

const updateDetails = async (cartId, updateBody) => {
  return cart.findByIdAndUpdate(cartId, { $set: updateBody });
};

const deletecart = async(CartId) => {
  return cart.findByIdAndDelete(CartId);
};

module.exports = {
  createCart,
  getCartList,
  getCartById,
  updateDetails,
  deletecart
};