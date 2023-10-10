const express = require("express");
const { cityController } = require("../../controllers");

const router = express.Router();

/** create city */
router.post(
  "/create-city",
  cityController.createCity
);

/** Get city list */
router.get(
  "/list",
  cityController.getCityList
);

/** Get city details by id */
router.get(
  "/get-details/:cityId",
  cityController.getCityDetails
);

/** upadate city */
router.put(
  "/update-details/:cityId",
  cityController.updateDetails
);

/**  Delete city */
router.delete(
  "/delete-city/:cityId",
  cityController.deletecity
);

module.exports = router;