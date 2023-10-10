const express = require("express");
const { upload } = require("../../middlewares/upload");
const { restaurantValidation } = require("../../validations");
const { restaurantController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create restaurant */
router.post(
  "/create-restaurant",
  upload.single("Restaurant_image"),
  validate(restaurantValidation.createRestaurant),
  restaurantController.createRestaurant
);

/** Get restaurant list */
router.get(
  "/list",
  restaurantController.getRestaurantList
);

/** Get restaurant details by id */
router.get(
  "/get-details/:restaurantId",
  restaurantController.getRestaurantDetails
);

/** restaurant details update by id */
router.put(
  "/update-details/:restaurantId",
  restaurantController.updateDetails
);

/** Delete restaurant */
router.delete(
  "/delete-restaurant/:restaurantId",
  restaurantController.deleteRestaurant
);

module.exports = router;