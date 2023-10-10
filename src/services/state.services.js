const { state } = require("../models");

/**
 * Create state
 * @param {object} reqBody
 * @returns {Promise<state>}
 */
const createState = async (reqBody) => {
  return state.create(reqBody);
};

const getStateList = async(req, res)=>{
  return state.find({$or : [{is_active : true}]})
  .populate("country");
};

const getStateById = async (stateId) => {
  return state.findById(stateId);
};

const updateDetails = async (stateId, updateBody) => {
  return state.findByIdAndUpdate(stateId, { $set: updateBody });
};

const deletestate = async(StateId) => {
  return state.findByIdAndDelete(StateId);
};

module.exports = {
  createState,
  getStateList,
  getStateById,
  updateDetails,
  deletestate
};