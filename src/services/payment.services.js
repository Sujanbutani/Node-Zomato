const { payment } = require("../models");

/**
 * Create payment
 * @param {object} reqBody
 * @returns {Promise<payment>}
 */
const createPayment = async (reqBody) => {
  return payment.create(reqBody);
};

const getPaymentList = async(req, res)=>{
  return payment.find({$or : [{is_active : true}]})
  .populate("user")
  .populate("order")
};

const getPaymentById = async (paymentId) => {
  return payment.findById(paymentId);
};

const updateDetails = async (paymentId, updateBody) => {
  return payment.findByIdAndUpdate(paymentId, { $set: updateBody });
};

const deletepayment = async(PaymentId) => {
  return payment.findByIdAndDelete(PaymentId);
};

module.exports = {
  createPayment,
  getPaymentList,
  getPaymentById,
  updateDetails,
  deletepayment
};