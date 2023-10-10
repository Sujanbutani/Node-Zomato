const express = require("express");
const { restaurant_typeController } = require("../../controllers");

const router = express.Router();

/** create restaurant_type */
router.post(
  "/create-restaurant_type",
  restaurant_typeController.createRestaurant_type
);

/** Get restaurant_type list */
router.get(
  "/list",
  restaurant_typeController.getRestaurant_typeList
);

/** Get restaurant_type details by id */
router.get(
  "/get-details/:restaurant_typeId",
  restaurant_typeController.getRestaurant_typeDetails
);

/** upadate restaurant_type */
router.put(
  "/update-details/:restaurant_typeId",
  restaurant_typeController.updateDetails
);

/**  Delete restaurant_type */
router.delete(
  "/delete-restaurant_type/:restaurant_typeId",
  restaurant_typeController.deleterestaurant_type
);

module.exports = router;