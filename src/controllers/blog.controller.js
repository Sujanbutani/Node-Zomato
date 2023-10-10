const { blogService} = require("../services");

/** create blog */
const createBlog = async (req, res) => {
  try {
    const reqBody = req.body;

    const blog = await blogService.createBlog(reqBody);
    if (!blog) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message:'blog Create Successfully',
      data: { blog },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** get blog list */
const getBlogList = async (req, res) => {
  try {
    const getList = await blogService.getBlogList(req, res);

    res.status(200).json({
      success: true,
      message: "Get blog list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get blog details by id
  const getBlogDetails = async (req, res) => {
    try {
      const getDetails = await blogService.getBlogById(req.params.blogId);
      if (!getDetails) {
        throw new Error("Blog not found!");
      }

      res.status(200).json({
        success: true,
        message: "Blog details get successfully!",
        data: getDetails,
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

  /** blog details update by id */
  const updateDetails = async (req, res) => {
    try {
      const blogId = req.params.blogId;
      const blogExists = await blogService.getBlogById(blogId);
      if (!blogExists) {
        throw new Error("Blog not found!");
      }

      await blogService.updateDetails(blogId, req.body);
      res
        .status(200)
        .json({ success: true, message: "Blog details update successfully!" });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

/** Delete blog */
const deleteblog = async (req, res) => {
  try {
    const blogId = req.params.blogId;
    // const blogExists = await blogService.getBlogById(blogId);
    if (!blogId) {
      throw new Error("Blog not found!");
    }

    await blogService.deleteblog(blogId);

    res.status(200).json({
      success: true,
      message: "Blog delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


module.exports = {
  createBlog,
  getBlogList,
  getBlogDetails,
  updateDetails,
  deleteblog,
};