const { blog } = require("../models");

/**
 * Create blog
 * @param {object} reqBody
 * @returns {Promise<blog>}
 */
const createBlog = async (reqBody) => {
  return blog.create(reqBody);
};

const getBlogList = async(req, res)=>{
  return blog.find({$or : [{is_active : true}]})
};

const getBlogById = async (blogId) => {
  return blog.findById(blogId);
};

const updateDetails = async (blogId, updateBody) => {
  return blog.findByIdAndUpdate(blogId, { $set: updateBody });
};

const deleteblog = async(BlogId) => {
  return blog.findByIdAndDelete(BlogId);
};

module.exports = {
  createBlog,
  getBlogList,
  getBlogById,
  updateDetails,
  deleteblog
};