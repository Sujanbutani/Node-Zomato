const express = require("express");
const { blogController } = require("../../controllers");

const router = express.Router();

/** create blog */
router.post(
  "/create-blog",
  blogController.createBlog
);

/** Get blog list */
router.get(
  "/list",
  blogController.getBlogList
);

/** Get blog details by id */
router.get(
  "/get-details/:blogId",
  blogController.getBlogDetails
);

/** upadate blog */
router.put(
  "/update-details/:blogId",
  blogController.updateDetails
);

/**  Delete blog */
router.delete(
  "/delete-blog/:blogId",
  blogController.deleteblog
);

module.exports = router;