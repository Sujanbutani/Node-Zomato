const { reviewService} = require("../services");

/** create review */
const createReview = async (req, res) => {
  try {
    const reqBody = req.body;

    const review = await reviewService.createReview(reqBody);
    if (!review) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message:'review Create Successfully',
      data: { review },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** get review list */
const getReviewList = async (req, res) => {
  try {
    const getList = await reviewService.getReviewList(req, res);

    res.status(200).json({
      success: true,
      message: "Get review list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get review details by id
  const getReviewDetails = async (req, res) => {
    try {
      const getDetails = await reviewService.getReviewById(req.params.reviewId);
      if (!getDetails) {
        throw new Error("Review not found!");
      }

      res.status(200).json({
        success: true,
        message: "Review details get successfully!",
        data: getDetails,
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

  /** review details update by id */
  const updateDetails = async (req, res) => {
    try {
      const reviewId = req.params.reviewId;
      const reviewExists = await reviewService.getReviewById(reviewId);
      if (!reviewExists) {
        throw new Error("Review not found!");
      }

      await reviewService.updateDetails(reviewId, req.body);
      res
        .status(200)
        .json({ success: true, message: "Review details update successfully!" });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

/** Delete review */
const deletereview = async (req, res) => {
  try {
    const reviewId = req.params.reviewId;
    // const reviewExists = await reviewService.getReviewById(reviewId);
    if (!reviewId) {
      throw new Error("Review not found!");
    }

    await reviewService.deletereview(reviewId);

    res.status(200).json({
      success: true,
      message: "Review delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


module.exports = {
  createReview,
  getReviewList,
  getReviewDetails,
  updateDetails,
  deletereview,
};