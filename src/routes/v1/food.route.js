const express = require("express");
const { upload } = require("../../middlewares/upload");
const { foodValidation } = require("../../validations");
const { foodController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create food */
router.post(
  "/create-food",
  upload.single("food_image"),
  validate(foodValidation.createFood),
  foodController.createFood
);

/** Get food list */
router.get(
  "/list",
  foodController.getFoodList
);

/** Get food details by id */
router.get(
  "/get-details/:foodId",
  foodController.getFoodDetails
);

/** food details update by id */
router.put(
  "/update-details/:foodId",
  foodController.updateDetails
);

/** Delete food */
router.delete(
  "/delete-food/:foodId",
  foodController.deleteFood
);

module.exports = router;