const { review } = require("../models");

/**
 * Create review
 * @param {object} reqBody
 * @returns {Promise<review>}
 */
const createReview = async (reqBody) => {
  return review.create(reqBody);
};

const getReviewList = async(req, res)=>{
  return review.find({$or : [{is_active : true}]})
  .populate("user")
  .populate("restaurant")
};

const getReviewById = async (reviewId) => {
  return review.findById(reviewId);
};

const updateDetails = async (reviewId, updateBody) => {
  return review.findByIdAndUpdate(reviewId, { $set: updateBody });
};

const deletereview = async(ReviewId) => {
  return review.findByIdAndDelete(ReviewId);
};

module.exports = {
  createReview,
  getReviewList,
  getReviewById,
  updateDetails,
  deletereview
};