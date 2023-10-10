const express = require("express");
const { reviewController } = require("../../controllers");

const router = express.Router();

/** create review */
router.post(
  "/create-review",
  reviewController.createReview
);

/** Get review list */
router.get(
  "/list",
  reviewController.getReviewList
);

/** Get review details by id */
router.get(
  "/get-details/:reviewId",
  reviewController.getReviewDetails
);

/** upadate review */
router.put(
  "/update-details/:reviewId",
  reviewController.updateDetails
);

/**  Delete review */
router.delete(
  "/delete-review/:reviewId",
  reviewController.deletereview
);

module.exports = router;